import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  
  endpoints: (builder) => ({

    registerUser: builder.mutation({
      query: (user) => {
        return {        
            url: "/auth/create-user",
            method: "POST",
            body: {user},         
        }
      },
      invalidatesTags: ["all-users"],
    }),

    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

  }),
});

export default authApi;
