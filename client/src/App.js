import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Generate from "./Pages/Generate";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
