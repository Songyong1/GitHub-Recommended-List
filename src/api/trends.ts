import { http } from "@/utils/http";

export type projectTrends = {};

//github项目趋势
export const getTrendsInfo = (data?: { object }) => {
  let page = { page: data };
  delete page.page.object;
  return http.request<any>("post", "/v1/opensource/repo", {
    data: { ...page }
  });
};
//获取筛选后的内容
export const getInfo = (data?: { object; languageId }) => {
  let page = { page: data };
  let languageId = data.languageId;
  delete data.languageId;
  delete page.page.object;
  return http.request<any>("post", "/v1/opensource/repo", {
    data: { ...page, languageId }
  });
};

export const getLanguages = (params?: { object }) => {
  const urlParams = new URLSearchParams(params);
  return http.request<any>(
    "get",
    `/v1/opensource/language?page.page=${urlParams.get("page")}&page.pageSize=${urlParams.get("pageSize")}`
  );
};
