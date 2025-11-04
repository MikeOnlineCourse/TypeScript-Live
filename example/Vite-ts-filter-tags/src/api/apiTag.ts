import axios from "axios";
import type { AxiosResponse } from "axios";
import type {
  ApiTagsListResponse,
  ApiTagsProductParams,
  ApiTagsProductResponse,
} from "./types.js";

const request = axios.create({
  baseURL: "https://vue-lessons-api.vercel.app/",
});

// https://vue-lessons-api.vercel.app/nav/tags
export const apiGetTagsList = (): Promise<AxiosResponse<ApiTagsListResponse>> =>
  request.get<ApiTagsListResponse>("/nav/tags");

// https://vue-lessons-api.vercel.app/nav/tags/product?tage=frontEnd
export const apiGetTagsProduct = (params: ApiTagsProductParams): Promise<AxiosResponse<ApiTagsProductResponse>> =>
  request.get<ApiTagsProductResponse>("/nav/tags/product", {
    params,
  });
