export const config = {
    apiKey: process.env.VITE_API_KEY_BYBIT,
    secret: process.env.VITE_API_SECRET_BYBIT,
    uid: process.env.VITE_API_MEMO_BYBIT,
    enableRateLimit: process.env.VITE_RATE_LIMIT_BYBIT,
    rateLimit: process.env.VITE_RATE_LIMIT_BYBIT_FREQUENCY,
    httpAgent: undefined,
    options: {
        fetch: {
            corsProxyUrl: process.env.VITE_PROXY,
        },
    },
};