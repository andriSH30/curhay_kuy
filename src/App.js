import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.component";

import Home from "./pages/Home/Home.page";
import SignIn from "./pages/SignIn/SignIn.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
