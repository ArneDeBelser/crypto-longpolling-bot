export const strategyConfigs = {
    // Simple default values
    baseUsdtAmount: 10,
    maxUsdtAmount: 50,

    mystrat: {
        // The filterKlineRange function takes in a set of trading data and two adjustment factors. It then calculates the highest and lowest values from the trading data and applies the adjustment factors to expand or shrink the range of valid prices.
        klineRangeLowAdjustmentFactor: {
            defaultValue: 0.9, // -10% - For example, if the lowest value obtained from the trading data is $50 and the klineRangeLowAdjustmentFactor is 0.9, the function will shrink the valid price range by multiplying $50 by 0.9 to obtain a new minimum value of $45.
        },
        klineRangeHighAdjustmentFactor: {
            defaultValue: 1.1, // +10% -  For example, if the highest value obtained from the trading data is $100 and the klineRangeHighAdjustmentFactor is 1.1, the function will expand the valid price range by multiplying $100 by 1.1 to obtain a new maximum value of $110.
        },
    },
};
