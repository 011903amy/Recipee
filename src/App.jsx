import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/StoreContext";
import Recipe from "./components/pages/backend/recipe/Recipe";
import Hompage from "./components/pages/frontend/homepage/Hompage";
import Single from "./components/pages/frontend/single/Single";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Category from "./components/pages/backend/category/Category";
import Level from "./components/pages/backend/level/Level";
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
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/level" element={<Level />} />
        </Routes>
      </Router>
    </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
