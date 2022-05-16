import * as apiAppCoin from "api/apiApp/apiAppCoin";
import reactQueryConfig from "config/reactQuery.config";
import { useMutation, useQuery, useQueryClient } from "react-query";

const useGetAppCoinCoins = () => {
  return useQuery("getAppCoinCoins", apiAppCoin.getAppCoinCoins, {
    ...reactQueryConfig,
  });
};

const getAppCoinWalletsCoins = async ({ queryKey }) => {
  const params = queryKey[1];
  try {
    const { data } = await instance.get(
      BASE_URL + "coins",
      params?.depositId
        ? {
            params: params?.depositId,
          }
        : null
    );
    return data?.Data?.map((item) => ({
      ...item,
      Logo: BASE_URL_ADDRESS.concat(item?.Logo),
    }));
  } catch (error) {
    throw new Error(error);
  }
};

const useGetAppCoinWalletsCoins = (params = true) => {
  return useQuery(
    ["getAppCoinWalletsCoins", params],
    apiAppCoin.getAppCoinWalletsCoins,
    { ...reactQueryConfig, enabled: !!params }
  );
};

const useGetAppCoinWalletsMarkets = (params = true) => {
  return useQuery(
    ["getAppCoinWalletsMarkets", params],
    apiAppCoin.getAppCoinWalletsMarkets,
    { ...reactQueryConfig, enabled: !!params }
  );
};

const usePostAppCoinWalletsGetCommission = () => {
  return useQuery(
    "postAppCoinWalletsGetCommission",
    apiAppCoin.postAppCoinWalletsGetCommission,
    {
      ...reactQueryConfig,
    }
  );
};

const useGetAppCoinWalletsGetMarketInfo = (params) => {
  return useQuery(
    ["getAppCoinWalletsGetMarketInfo", params],
    apiAppCoin.getAppCoinWalletsGetMarketInfo,
    {
      ...reactQueryConfig,
    }
  );
};

const usePostAppCoinCoinConvertPrice = () => {
  const queryClient = useQueryClient();
  return useMutation(apiAppCoin.postAppCoinCoinConvertPrice, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAppReportCoinConvertPrices");
      queryClient.invalidateQueries("getAppReportCoinSelecteds");
    },
  });
};

const usePostAppCoinCoinConvertMarket = () => {
  const queryClient = useQueryClient();
  return useMutation(apiAppCoin.postAppCoinCoinConvertMarket, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAppReportCoinConvertMarkets");
      queryClient.invalidateQueries("getAppReportCoinSelecteds");
    },
  });
};

const useGetAppCoinAllConvertAccounts = (params) => {
  return useQuery(
    ["getAppCoinAllConvertAccounts", params],
    apiAppCoin.getAppCoinAllConvertAccounts,
    { ...reactQueryConfig }
  );
};

const usePostAppCoinConvertAccountCharge = () => {
  const queryClient = useQueryClient();
  return useMutation(apiAppCoin.postAppCoinConvertAccountCharge, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAppCoinAllConvertAccounts");
    },
  });
};

const useGetAppCoinBaseCoinSelecteds = (params) => {
  return useQuery(
    ["getAppCoinBaseCoinSelecteds", params],
    apiAppCoin.getAppCoinBaseCoinSelecteds,
    { ...reactQueryConfig }
  );
};

const useGetAppCoinDestinationCoinSelecteds = (params) => {
  return useQuery(
    ["getAppCoinDestinationCoinSelecteds", params],
    apiAppCoin.getAppCoinDestinationCoinSelecteds,
    { ...reactQueryConfig, enabled: !!params }
  );
};

const usePostAppCoinCoinConvert = () => {
  return useMutation(apiAppCoin.postAppCoinCoinConvert, {
    ...reactQueryConfig,
  });
};

const useGetAppCoinLandingPrice = (params) => {
  return useQuery(
    ["getAppCoinLandingPrice", params],
    apiAppCoin.getAppCoinLandingPrice,
    {
      ...reactQueryConfig,
    }
  );
};

const usePutAppCoinLandingPrice = () => {
  const queryClient = useQueryClient();
  return useMutation(apiAppCoin.putAppCoinLandingPrice, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAppCoinLandingPrice");
    },
  });
};

const usePostAppCoinCoinsForAdmin = (params) => {
  return useQuery(
    ["postAppCoinCoinsForAdmin", params],
    apiAppCoin.postAppCoinCoinsForAdmin,
    { ...reactQueryConfig, enabled: !!params }
  );
};

const usePostAppCoinMarketsForAdmin = (params) => {
  return useQuery(
    ["postAppCoinMarketsForAdmin", params],
    apiAppCoin.postAppCoinMarketsForAdmin,
    { ...reactQueryConfig }
  );
};

const usePutAppCoinCoin = () => {
  const queryClient = useQueryClient();

  return useMutation(apiAppCoin.putAppCoinCoin, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAppCoinCoinsForAdmin");
      queryClient.invalidateQueries("getAppCoinWalletsCoins");
    },
  });
};

const usePutAppCoinCoinMarket = () => {
  const queryClient = useQueryClient();

  return useMutation(apiAppCoin.putAppCoinCoinMarket, {
    onSuccess: () => {
      queryClient.invalidateQueries("postAppCoinMarketsForAdmin");
      queryClient.invalidateQueries("getAppCoinWalletsMarkets");
    },
  });
};

const usePutAppCoinDeActiveCoinConvertMarket = () => {
  const queryClient = useQueryClient();
  return useMutation(apiAppCoin.putAppCoinDeActiveCoinConvertMarket, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAppReportCoinConvertMarkets");
    },
  });
};

const useGetAppCoinAssignAddress = () => {
  const queryClient = useQueryClient();

  return useMutation(apiAppCoin.getAppCoinAssignAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAppCoinWalletsCoins");
    },
  });
};

const usePostAppCoinP2PTransfer = () => {
  const queryClient = useQueryClient();

  return useMutation(apiAppCoin.postAppCoinP2PTransfer, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAppWalletGetAllAccounts");
    },
  });
};

export {
  useGetAppCoinCoins,
  getAppCoinWalletsCoins,
  useGetAppCoinWalletsCoins,
  useGetAppCoinWalletsMarkets,
  usePostAppCoinWalletsGetCommission,
  useGetAppCoinWalletsGetMarketInfo,
  usePostAppCoinCoinConvertPrice,
  usePostAppCoinCoinConvertMarket,
  useGetAppCoinAllConvertAccounts,
  usePostAppCoinConvertAccountCharge,
  useGetAppCoinBaseCoinSelecteds,
  useGetAppCoinDestinationCoinSelecteds,
  usePostAppCoinCoinConvert,
  useGetAppCoinLandingPrice,
  usePutAppCoinLandingPrice,
  usePostAppCoinCoinsForAdmin,
  usePostAppCoinMarketsForAdmin,
  usePutAppCoinCoin,
  usePutAppCoinCoinMarket,
  usePutAppCoinDeActiveCoinConvertMarket,
  useGetAppCoinAssignAddress,
  usePostAppCoinP2PTransfer,
};
