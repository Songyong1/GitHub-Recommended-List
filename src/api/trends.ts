import { http } from "@/utils/http";

export type projectTrends = {};

//github项目趋势
export const getTrendsInfo = (data?: any) => {
  let page = { page: data };
  let languageId = data.languageId;
  delete page.page.object;
  return http.request<any>("post", "/v1/opensource/repo", {
    data: { ...data, languageId }
  });
};
//获取筛选后的内容
export const getInfo = (data?: any) => {
  let page = { page: data };
  let languageId = data.languageId;
  return http.request<any>("post", "/v1/opensource/repo", {
    data: { ...page, languageId }
  });
};

//获取对应语言的内容
export const getLanguages = (params?: { object }) => {
  const urlParams = new URLSearchParams(params);
  return http.request<any>(
    "get",
    `/v1/opensource/language?page.page=${urlParams.get("pageNum")}&page.pageSize=${urlParams.get("pageSize")}`
  );
};

//获取收藏夹的内容
export const getRepoFav = (params?: { object }) => {
  const urlParams = new URLSearchParams(params);
  return http.request<any>(
    "get",
    `/v1/opensource/repo/fav?page.page=${urlParams.get("page")}&page.pageSize=${urlParams.get("pageSize")}`
  );
};

//添加收藏夹的内容
export const addFavApi = data => {
  return http.request<any>("post", "/v1/opensource/repo/fav", { data: data });
};

//移除收藏夹的内容
export const cancelAddFavApi = data => {
  return http.request<any>("post", "/v1/opensource/repo/fav", { data: data });
};
