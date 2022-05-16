import { useCallback, useContext } from "react";
import { coinsCtx, marketsCtx } from "context/currency";

export const useCoins = () => useContext(coinsCtx);
export const useMarkets = () => useContext(marketsCtx);
//
export const useCurrency = () => {
  const coins = useCoins();
  //
  const findCoin = useCallback(
    ({ DepositID = null, CoinSymbol = null } = {}) => {
      if (DepositID) {
        return coins.find((coin) => coin.DepositID === DepositID) ?? {};
      }
      if (CoinSymbol) {
        return (
          coins.find(
            (coin) => coin.CoinSymbol.toLowerCase() === CoinSymbol.toLowerCase()
          ) ?? {}
        );
      }
    },
    [coins]
  );
  //
  return { findCoin };
};
