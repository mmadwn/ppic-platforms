// import API_ENDPOINT from "@/api/apiEndpoints";
// import { showError } from "@/utils/antdHelper";
// import axios, { AxiosResponse } from "axios";
// import { useState } from "react";
// import { Sessions } from "@/types";

// export interface IAxiosResponse extends AxiosResponse<any, any> {
//   code?: -1 | 0 | 11 | 12 | 21;
//   info?: any;
// }

// export interface IFetcherGetParams {
//   url: string;
//   api: "SSO" | "API" | "CUSTOM";
// }

// export interface IFetcherPostParams extends IFetcherGetParams {
//   data: any;
// }

// const initialRes = {
//   data: null,
//   status: 0,
//   statusText: "",
//   headers: {},
//   config: {},
// };

// const useFetcher = (sessions: Sessions | undefined) => {
//   const [isLoading, setLoading] = useState(false);
//   const [isError, setError] = useState<any | undefined>("");
//   if (!sessions)
//     return {
//       FetcherGet: (_data: IFetcherGetParams) => {},
//       FetcherPost: (_data: IFetcherPostParams) => {},
//       isLoading: false,
//       isError: "",
//     } as {
//       FetcherGet: ({ url, api }: IFetcherGetParams) => Promise<IAxiosResponse>;
//       FetcherPost: ({
//         url,
//         api,
//         data,
//       }: IFetcherPostParams) => Promise<IAxiosResponse>;
//       isLoading: boolean;
//       isError: any;
//     };

//   async function FetcherPost({
//     url,
//     api,
//     data,
//   }: IFetcherPostParams): Promise<IAxiosResponse> {
//     let endpoint = "NOENDPOINT";
//     switch (api) {
//       case "SSO":
//         endpoint = API_ENDPOINT.SSO ?? "NOENDPOINT";
//         break;
//       case "API":
//         endpoint = API_ENDPOINT.API ?? "NOENDPOINT";
//         break;
//       case "CUSTOM":
//         endpoint = "";
//         break;
//       default:
//         endpoint = "NOENDPOINT";
//         break;
//     }

//     const fixUrl = endpoint + url;

//     setError(undefined);
//     setLoading(true);

//     try {
//       const response = await axios.post(fixUrl, data, {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcsImVtYWlsIjoic3VwZXJhZG1pbkBzZWdpdGlnYW1lcmFoLmNvbSIsImlhdCI6MTczMzgxNjMwMCwiZXhwIjoxNzMzOTAyNzAwfQ.8ct9XwZKN1y3F8MhbjokwrpDesKbf5UJu5UIZh4rivs`,
//         },
//       });

//       return response;
//     } catch (error: any) {
//       if (!sessions) return initialRes;
//       const info =
//         error?.response?.data?.message ??
//         error?.response?.data?.info ??
//         "Terjadi Kesalahan pada server!";
//       const code = error?.response?.data?.code ?? -1;
//       const dataRes = error?.response?.data?.data;
//       const status = error?.response?.status;

//       showError("Error!", info);
//       setError(info);
//       return {
//         ...initialRes,
//         status,
//         code,
//         data: dataRes,
//         info,
//       };
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function FetcherGet({
//     url,
//     api,
//   }: IFetcherGetParams): Promise<IAxiosResponse> {
//     setError(undefined);
//     setLoading(true);
//     let endpoint = "NOENDPOINT";
//     switch (api) {
//       case "SSO":
//         endpoint = API_ENDPOINT.SSO ?? "NOENDPOINT";
//         break;
//       case "API":
//         endpoint = API_ENDPOINT.API ?? "NOENDPOINT";
//         break;
//       case "CUSTOM":
//         endpoint = "";
//         break;
//       default:
//         endpoint = "NOENDPOINT";
//         break;
//     }
//     const fixUrl = endpoint + url;

//     try {
//       const response = await axios.get(fixUrl, {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcsImVtYWlsIjoic3VwZXJhZG1pbkBzZWdpdGlnYW1lcmFoLmNvbSIsImlhdCI6MTczMzgxNjMwMCwiZXhwIjoxNzMzOTAyNzAwfQ.8ct9XwZKN1y3F8MhbjokwrpDesKbf5UJu5UIZh4rivs`,
//         },
//       });

//       return response;
//     } catch (error: any) {
//       if (!sessions) return initialRes;
//       const info =
//         error?.response?.data?.message ??
//         error?.response?.data?.info ??
//         "Terjadi Kesalahan pada server!";

//       showError("Error!", info);
//       setError(info);
//       return {
//         ...initialRes,
//         code: -1,
//         info,
//       };
//     } finally {
//       setLoading(false);
//     }
//   }

//   return { FetcherGet, FetcherPost, isLoading, isError };
// };

// export default useFetcher;
