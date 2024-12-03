import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/StoreContext";
import Recipe from "./components/pages/backend/recipe/Recipe";
import Hompage from "./components/pages/frontend/homepage/Hompage";
import Single from "./components/pages/frontend/single/Single";
const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Hompage/>} />
          <Route path="/recipe-single" element={<Single />} />
          <Route path="/admin/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
