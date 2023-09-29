// Import the 'config' object from the 'pairs.mjs' file, located in the './config/' directory.
import { config } from './config/pairs.mjs';

/**
 * Define a JavaScript class named 'Bot'.
 * @param {Logger} logger - An instance of the Logger class.
 */
export default class Bot {
    constructor(logger) {
        // Set a default wait time of 2000 milliseconds (2 seconds) between cycles.
        this.wait = 2000;
        // Store the 'logger' instance provided as a parameter in the class instance.
        this.logger = logger;
    }

    /**
     * Asynchronous method that represents a single cycle of the bot for a specific pair configuration.
     * @param {object} pairConfig - Configuration data for a trading pair.
     */
    async runBotCycle(pairConfig) {
        // Log that the bot is starting a cycle for a specific pair.
        console.log(`${this.logger.logSymbol(pairConfig)} Bot running through cycle`);

        // Dynamically import the strategy module based on the pair's strategy identifier.
        const strategyModule = await import(`./strategies/${pairConfig.strategy.identifier}.mjs`);
        // Get the default export from the imported strategy module.
        const strategy = strategyModule.default;

        // Execute the strategy by passing the pairConfig and pair symbol as arguments.
        await strategy(pairConfig, pairConfig.symbol);
    }

    /**
     * Asynchronous method that starts and manages the bot's operation.
     */
    async start() {
        // Log that the bot is starting.
        console.log("Starting bot");

        // Create an initial queue of pair configurations that need to be processed.
        const queue = config
            .filter(pairConfig => !pairConfig.ignore)
            .map(pairConfig => ({
                pairConfig,
                lastRunTime: 0,        // Initialize the last run time to 0 (epoch time).
                interval: pairConfig.interval, // Set the interval for this pair.
            }));

        // Continue running as long as there are items in the queue.
        while (queue.length > 0) {
            // Dequeue the first item in the queue.
            const { pairConfig, lastRunTime, interval } = queue.shift();
            // Calculate the time elapsed since the last cycle.
            const timeSinceLastRun = Date.now() - lastRunTime;

            // Check if it's time to run the cycle based on the defined interval.
            if (timeSinceLastRun >= interval) {
                try {
                    // Execute a single cycle of the bot for the current pairConfig.
                    await this.runBotCycle(pairConfig);
                    // Log that the cycle completed successfully.
                    console.log(`${this.logger.logSymbol(pairConfig)} Bot completed cycle`);
                } catch (error) {
                    // Log an error message if the cycle encountered an error.
                    console.error(`${this.logger.logSymbol(pairConfig)} Bot cycle failed:`, error);
                }

                // Push the pairConfig back to the queue with an updated lastRunTime.
                queue.push({
                    pairConfig,
                    lastRunTime: Date.now(),
                    interval: pairConfig.interval,
                });
            } else {
                // Calculate the delay time until the next cycle is allowed.
                const delay = Math.max(0, interval - timeSinceLastRun);
                // Push the pairConfig back to the queue with the original lastRunTime.
                queue.push({
                    pairConfig,
                    lastRunTime,
                    interval: pairConfig.interval,
                });
                // Log a message indicating the bot is waiting before the next cycle.
                console.log(`${this.logger.logSymbol(pairConfig)} Bot waiting \x1b[36m${Math.floor(delay / 1000 / 60)}m${Math.floor(delay / 1000) % 60}s\x1b[0m before running next cycle`);
            }

            // Wait for a specified amount of time (this.wait) before processing the next pair.
            await new Promise((resolve) => setTimeout(resolve, this.wait));
        }

        // Log that the bot has completed all cycles when the queue is empty.
        console.log("Bot has completed all cycles");
    }
}
