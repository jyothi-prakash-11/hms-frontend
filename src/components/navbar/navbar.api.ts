import api from "../../config/api";
import type { ApiResponse } from "../../util/response.types";
import type { NavbarResponse } from "./navbar.types";

const navbarApi = {
  getNavbarItems: async function () {
    const response = await api.get<ApiResponse<NavbarResponse[]>>("/meta/nav");
    return response.data;
  },
};
export default navbarApi;
