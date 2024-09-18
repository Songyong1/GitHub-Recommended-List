import { http } from "@/utils/http";

export type projectTrends = {};

//github项目趋势
export const getTrendsInfo = (params?: { page?: object }) => {
  const urlParams = new URLSearchParams(params);
  return http.request<any>(
    "get",
    `/v1/owner?page.page=${urlParams.get("page")}&page.pageSize=${urlParams.get("pageSize")}`
  );
};
