import { createOrder } from '../helpers/botHelpers.mjs';
import Logger from '../logger.mjs';

const logger = new Logger();

export default async function strategy(pairConfig, pair, testing = false) {
    console.log(`${logger.logSymbol(pairConfig)} running my strat!`);

    const order = {
        amount: 0.01,
        price: 12700,
    }

    await createOrder(pairConfig, pair, 'limit', 'buy', order.amount, order.price);
}