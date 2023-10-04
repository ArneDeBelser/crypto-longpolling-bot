// This is the node exchange variant
import ccxt from 'ccxt';
import { config } from './config/bot.mjs';

const bybit = new ccxt['bybit'](config);
bybit.setSandboxMode(true) // activate Testnet, leave this line out of you want to perform REAL trades

export default bybit;
