import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "hooks/useAuth";

import config from "data/config";
import pathURLs from "data/pageURLs";

import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";

// TEST
import { apiGet } from "services/api";

function App() {
  // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
  async function test() {await console.log(await apiGet("api"))};
  test();
  // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

  return (
    <AuthProvider>
      <BrowserRouter>
        {/* SET WEBSITE TITLE */}
        <title>{config.name} | {config.description}</title>
        <Routes>
          <Route path={pathURLs.home} element={<Home />} />
          <Route path={pathURLs.login} element={<Login />} />
          <Route path={pathURLs.register} element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
