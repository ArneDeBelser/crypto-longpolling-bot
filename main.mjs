// Import the 'Bot' class from the 'bot.mjs' file, which contains the bot logic.
import Bot from './bot.mjs';

// Import the 'Logger' class from the 'logger.mjs' file, which is used for logging.
import Logger from './logger.mjs';

import 'dotenv/config';

// Create a new instance of the 'Logger' class.
const logger = new Logger();

// Create a new instance of the 'Bot' class, passing the 'logger' instance as a parameter.
const bot = new Bot(logger);

// Start the bot by invoking the 'start' method.
bot.start();
