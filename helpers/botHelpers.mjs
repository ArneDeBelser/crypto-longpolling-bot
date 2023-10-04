export const createOrder = async (pairConfig, pair, type, side, amount, price, params = {}) => {
    const exchange = (await import(`../exchanges/${pairConfig.exchange}/nodeExchange.mjs`)).default;
    await exchange.signIn?.(); // Use optional chaining to check if signIn is a function

    try {
        await exchange.createOrder(pair, type, side, amount, price, params);
    } catch (error) {
        console.error(`Error creating order: ${pair} | ${type} | ${side} | amount: ${amount} | price: ${price} | error: ${error.message}`);
    }
};