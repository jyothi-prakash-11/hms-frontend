import api from "../../config/api";
import type { ApiResponse } from "../../util/response.types";
import type { LoginRequest, LoginResponse } from "./auth.types";

const authApi = {
  login: async function (data: LoginRequest) {
    const response = await api.post<ApiResponse<LoginResponse>>(
      "/auth/login",
      data,
    );

    return response.data;
  },
};

export default authApi;
