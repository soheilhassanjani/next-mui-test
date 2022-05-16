import React, { useMemo } from "react";
import { coinsCtx, marketsCtx } from "context/currency";
import {
  useGetAppCoinCoins,
  useGetAppCoinWalletsMarkets,
} from "hook/api/apiApp/useApiAppCoin";

const CurrencyProvider = ({ children }) => {
  //
  const coins = useGetAppCoinCoins();
  const markets = useGetAppCoinWalletsMarkets();
  //
  const memoizedMarkets = useMemo(() => markets.data ?? [], [markets.data]);
  const memoizedCoins = useMemo(
    () =>
      coins.data?.map((coin) => ({
        ...coin,
        Name: coin.NameFa,
        NameEn: coin.Name,
      })) ?? [],
    [coins.data]
  );
  //
  return (
    <coinsCtx.Provider value={memoizedCoins}>
      <marketsCtx.Provider value={memoizedMarkets}>
        {children}
      </marketsCtx.Provider>
    </coinsCtx.Provider>
  );
};

export default CurrencyProvider;
