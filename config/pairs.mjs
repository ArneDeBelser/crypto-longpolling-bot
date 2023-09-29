export const config = [
    // Start bitmart
    {
        symbol: 'default',
        exchange: 'bybit',
        interval: 15 * 60 * 1000,
        baseUsdtAmount: 6,
        minUsdtAmount: 5.1,
        maxUsdtAmount: 35,
        ignore: true,
        strategy: {
            identifier: 'mystrat',
        },
    },

    {
        symbol: 'BTC/USDT',
        exchange: 'bybit',
        interval: 21 * 60 * 1000,
        baseUsdtAmount: 6,
        minUsdtAmount: 5.1,
        maxUsdtAmount: 35,
        ignore: false,
        strategy: {
            identifier: 'mystrat',
        },
    },
    {
        symbol: 'ETH/USDT',
        exchange: 'bybit',
        interval: 21 * 60 * 1000,
        baseUsdtAmount: 6,
        minUsdtAmount: 5.1,
        maxUsdtAmount: 35,
        ignore: false,
        strategy: {
            identifier: 'mystrat',
        },
    },
    {
        symbol: 'LTC/USDT',
        exchange: 'bybit',
        interval: 21 * 60 * 1000,
        baseUsdtAmount: 6,
        minUsdtAmount: 5.1,
        maxUsdtAmount: 35,
        ignore: false,
        strategy: {
            identifier: 'mystrat',
        },
    },
    {
        symbol: 'XLM/USDT',
        exchange: 'bybit',
        interval: 21 * 60 * 1000,
        baseUsdtAmount: 6,
        minUsdtAmount: 5.1,
        maxUsdtAmount: 35,
        ignore: false,
        strategy: {
            identifier: 'mystrat',
        },
    },

    // {
    //     symbolId: 100,
    //     symbol: 'dummy',
    //     exchange: 'bitmart',
    //     interval: 15 * 60 * 1000,
    //     ignore: false,
    //     baseUsdtAmount: 6,
    //     minUsdtAmount: 5.1,
    //     maxUsdtAmount: 35,
    //     strategy: {
    //         identifier: 'ab',
    //         askDifferenceThreshold: 0.05, // Filter out nubers within x percentage of eachother - def: 0.05
    //         bidDifferenceThreshold: 0.05, // Filter out nubers within x percentage of eachother - def: 0.05
    //         priceRangePercentageAsk: 0.03, // Filter out orders too close to current price - def: 0.03
    //         priceRangePercentageBid: 0.05, // Filter out orders too close to current price - def: 0.05
    //         sellInvalidationThreshold: 0.03, // Filter out numbers to close to already bought levels in this iteration - def: 0.03
    //         buyInvalidationThreshold: 0.03, // Filter out numbers to close to already bought levels in this iteration - def: 0.03
    //         klineRangeLowAdjustmentFactor: 0.09, // Adjust the range of valid prices obtained from trading data to filter out irrelevant data based on the current trading price - def: 0.9
    //         klineRangeHighAdjustmentFactor: 1.01, // Adjust the range of valid prices obtained from trading data to filter out irrelevant data based on the current trading price - def: 1.1
    //         bigMoveThreshold: 0.7, // When is a move considered big - def: 0.7
    //         guaranteedProfitPercentage: 0.08, // 8% -The percentage of profit that is guaranteed in each trade.
    //     },
    // },
];
