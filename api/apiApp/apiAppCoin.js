import instance from "config/instanceAxios";
import { BASE_URL_ADDRESS, BASE_URL_APP } from "constant/baseURL";

const BASE_URL = BASE_URL_APP + "Coin/";

const getAppCoinCoins = async () => {
  const { data } = await instance.get(BASE_URL + "coins");
  return data?.Data?.map((item) => ({
    ...item,
    Logo: BASE_URL_ADDRESS.concat(item?.Logo),
  }));
};

const getAppCoinWalletsMarkets = async () => {
  try {
    const { data } = await instance.get(BASE_URL + "markets");
    return data?.Data;
  } catch (error) {
    throw new Error(error);
  }
};

const postAppCoinWalletsGetCommission = async () => {
  try {
    const { data } = await instance.post(BASE_URL + "GetCommission");
    return data?.Data;
  } catch (error) {
    throw new Error(error);
  }
};

const getAppCoinWalletsGetMarketInfo = async ({ queryKey }) => {
  const params = queryKey[1];
  try {
    const { data } = await instance.get(BASE_URL + "GetMarketInfo", {
      params,
    });
    return data?.Data;
  } catch (error) {
    throw new Error(error);
  }
};

const postAppCoinCoinConvertPrice = async (params) => {
  return await instance.post(BASE_URL + "CoinConvertPrice", params);
};

const postAppCoinCoinConvertMarket = async (params) => {
  return await instance.post(BASE_URL + "CoinConvertMarket", params);
};

const getAppCoinAllConvertAccounts = async ({ queryKey }) => {
  const params = queryKey[1];
  try {
    const { data } = await instance.get(
      BASE_URL + "AllConvertAccounts",
      params
    );
    return data?.Data;
  } catch (error) {
    throw new Error(error);
  }
};

const postAppCoinConvertAccountCharge = async (params) => {
  return await instance.post(BASE_URL + "ConvertAccountCharge", params);
};

const getAppCoinBaseCoinSelecteds = async ({ queryKey }) => {
  const params = queryKey[1];
  try {
    const { data } = await instance.get(BASE_URL + "baseCoinSelecteds", params);
    return data?.Data;
  } catch (error) {
    throw new Error(error);
  }
};

const getAppCoinDestinationCoinSelecteds = async ({ queryKey }) => {
  const params = queryKey[1];
  try {
    const { data } = await instance.get(BASE_URL + "destinationCoinSelecteds", {
      params,
    });
    return data?.Data;
  } catch (error) {
    throw new Error(error);
  }
};

const postAppCoinCoinConvert = async (params) => {
  return await instance.post(BASE_URL + "coinConvert", params);
};

const getAppCoinLandingPrice = async ({ queryKey }) => {
  const params = queryKey[1];
  const { data } = await instance.get(BASE_URL + "landingPrice", { params });
  return {
    ...data?.Data,
    Content: data?.Data?.Content?.map((item) => ({
      ...item,
      Logo: BASE_URL_ADDRESS.concat(item?.Logo),
    })),
  };
};

const putAppCoinLandingPrice = async (params) => {
  return await instance.put(BASE_URL + "landingPrice", params);
};

const postAppCoinCoinsForAdmin = async ({ queryKey }) => {
  const params = queryKey[1];
  try {
    const { data } = await instance.post(BASE_URL + "CoinsForAdmin", params);
    return data?.Data;
  } catch (error) {
    throw new Error(error);
  }
};

const postAppCoinMarketsForAdmin = async ({ queryKey }) => {
  const params = queryKey[1];
  try {
    const { data } = await instance.post(BASE_URL + "MarketsForAdmin", params);
    return data?.Data;
  } catch (error) {
    throw new Error(error);
  }
};

const putAppCoinCoin = async (params) => {
  return await instance.put(BASE_URL + "coin", params);
};

const putAppCoinCoinMarket = async (params) => {
  return await instance.put(BASE_URL + "coinMarket", params);
};

const putAppCoinDeActiveCoinConvertMarket = async (params) => {
  return await instance.put(BASE_URL + "DeActiveCoinConvertMarket", params);
};

const getAppCoinAssignAddress = async (params) => {
  return await instance.get(BASE_URL + "assignAddress", { params });
};

const postAppCoinP2PTransfer = async (params) => {
  return await instance.post(BASE_URL + "P2PTransfer", params);
};

export {
  getAppCoinCoins,
  getAppCoinWalletsMarkets,
  postAppCoinWalletsGetCommission,
  getAppCoinWalletsGetMarketInfo,
  postAppCoinCoinConvertPrice,
  postAppCoinCoinConvertMarket,
  getAppCoinAllConvertAccounts,
  postAppCoinConvertAccountCharge,
  getAppCoinBaseCoinSelecteds,
  getAppCoinDestinationCoinSelecteds,
  postAppCoinCoinConvert,
  getAppCoinLandingPrice,
  putAppCoinLandingPrice,
  postAppCoinCoinsForAdmin,
  postAppCoinMarketsForAdmin,
  putAppCoinCoin,
  putAppCoinCoinMarket,
  putAppCoinDeActiveCoinConvertMarket,
  getAppCoinAssignAddress,
  postAppCoinP2PTransfer,
};
