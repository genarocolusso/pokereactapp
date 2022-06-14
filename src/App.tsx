import { Routes, Route, Outlet, Link } from "react-router-dom";
import { NotFound } from "./pages/404";
import Layout from "./pages/Layout";
import { MainContainer } from "./pages/Main";
import { Teams } from "./pages/Teams";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainContainer />} />
        <Route path="teams" element={<Teams />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
