import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
