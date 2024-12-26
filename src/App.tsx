import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import type { Component } from "solid-js";

const queryClient = new QueryClient();

const App: Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main class="bg-black flex items-center justify-center w-screen h-screen text-white text-4xl">
        Local First AI
      </main>

      <SolidQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
