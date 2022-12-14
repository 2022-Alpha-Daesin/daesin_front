import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";
import { AxiosInterceptor } from "./apis/config";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      useErrorBoundary: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
// </React.StrictMode> 개발단계에서 렌더링이 두번 실행되기 때문에 지움
// 참고 https://velog.io/@hjs0522/useEffect-%EB%91%90%EB%B2%88-%EC%8B%A4%ED%96%89-%EB%90%98%EB%8A%94-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AxiosInterceptor>
        <App />
      </AxiosInterceptor>
    </QueryClientProvider>
  </RecoilRoot>,
);
