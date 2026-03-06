import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function NotFound() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 128px)",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
        404 - Page Not Found
      </h2>
      <p>The page you are looking for does not exist.</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
