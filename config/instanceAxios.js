import axios from "axios";
import { BASE_URL_ADDRESS } from "constant/baseURL";

export const instance = axios.create({
  baseURL: BASE_URL_ADDRESS,
});

instance.interceptors.request.use(
  (config) => {
    const AUTH_TOKEN = localStorage.getItem("authToken");
    if (true) {
      config.headers["Authorization"] =
        "09999999999:dcb56cb7-6455-4303-9cd2-78c6b888e119";
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error)
);

export const setupInterceptors = (history, connectionStop, t, queryClient) => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      // if(){

      // }
      if (
        error?.response?.data?.message ===
          "لطفا فرآیند ثبت نام را تکمیل فرمایید." ||
        error?.response?.status === 401
      ) {
        setTimeout(() => {
          window.location.href = "/login";
          // connectionStop();
          // localStorage.removeItem("authToken");
          // localStorage.removeItem("name");
          // queryClient.clear();
          // Toast.error(t("text-166"));
          // history.push({
          //   pathname: "/login",
          //   state: {
          //     prevPathname: history.location.pathname,
          //   },
          // });
          // شما مدت زمان قابل توجه ای در سایت فعال نبوده اید ، لطفا مجددا وارد سامانه شوید.
        }, 1000);
      }
      return Promise.reject(error);
      // if (
      //   error?.response?.status === 500 ||
      //   error?.response?.status === 503 ||
      //   error?.message?.toString().toLowerCase() === "network error"
      // ) {
      //   if (haveErr500) return;
      //   return setHaveErr500(true);
      // }
      // log error

      // console.log(error);
      // // check connection
      // if (!doesConnectionExist()) {
      //   Toast.error("متاسفانه خطای غیر منتظره ای در سرویس بوجود آمده است");
      // }
      // // handle unauthorized
      // else if (error?.response?.status === 401) {
      //   localStorage.clear();
      //   localStorage.setItem("ex-token", true);
      //   history.push("/login");
      //   queryClient.clear();
      // }
      // // log network error
      // if (error?.message?.toString().toLowerCase() === "network error") {
      //   console.log("network error");
      // }
      // // log not found
      // else if (error?.response?.status === 404) {
      //   console.log("not found!");
      // }
      // // handle error message
      // else if (error?.response?.data?.message) {
      //   // Toast.error(error.response.data.message);
      // } else {
      //   Toast.error(
      //     "متاسفانه خطای غیر منتظره ای در سرویس کیف پول بوجود آمده است"
      //   );
      //   console.log("unexpected error");
      // }

      // return Promise.reject(error);
    }
  );
};

export default instance;
