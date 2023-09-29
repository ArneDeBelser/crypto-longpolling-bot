import Logger from '../logger.mjs';

const logger = new Logger();

export default async function strategy(pairConfig, pair, testing = false) {
    console.log(`${logger.logSymbol(pairConfig)} running my strat!`);
}