import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  
  endpoints: (builder) => ({

    getALlUser: builder.query({
      query: () => {
        return {        
            url: "/auth",
            method: "GET"
        }
      },
      providesTags : ["all-users"],
    }),

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

    verifyOTP: builder.mutation({
      query: (verifyData) => {
        return {        
            url: "/auth/verifyOTP",
            method: "POST",
            body: verifyData,         
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

    sendEmail: builder.mutation({
      query: (emailInfo) => {        
        return {
          url: "/auth/sendEmail",
          method: "POST",
          body: emailInfo,
        }
      },
    }),


  }),
});

export default authApi;
