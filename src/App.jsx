import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/StoreContext";
import Recipe from "./components/pages/backend/recipe/Recipe";
import Hompage from "./components/pages/frontend/homepage/Hompage";
import Single from "./components/pages/frontend/single/Single";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Hompage/>} />
          <Route path="/recipe/single/:slug" element={<Single />} />
          <Route path="/admin/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
