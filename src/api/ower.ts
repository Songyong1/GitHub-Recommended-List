import { http } from "@/utils/http";

export const owerInfo = (params?: object) => {
  // let page = { ...data };
  // delete page.page.object;
  return http.request<any>("get", "/v1/opensource/owner", {
    params
  });
};
