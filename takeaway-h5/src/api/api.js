import axios from "./request";

// 首页的数据接口
export const getHomeData = () => axios.get("/mock/home.json");

// 店铺的数据接口
export const getStoreData = () => axios.get("/mock/store.json");
