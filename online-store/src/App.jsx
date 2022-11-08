import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Layout from "./components/Layouts/Layout";
import AddProducts from "./pages/AddProducts";
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CategoryContext = createContext();


function App() {

  const [selectedCategory, setSelectedCategory] = useState("");
  return (
      <CategoryContext.Provider value={[selectedCategory, setSelectedCategory]}>
        <Router>
          <div className="main--content">
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path="/products"
                  element={
                    <Layout>
                      <AddProducts />
                    </Layout>
                  }
                />
              </Routes>
            </main>
          </div>
          <ToastContainer />
        </Router>
      </CategoryContext.Provider>
  );
}

export default App;
