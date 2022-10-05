import "../src/App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./componants/frontend/homepages/homepage";
import SignInPage from "./componants/frontend/homepages/signin";
import CartSection from "./componants/frontend/homepages/CartSection";
import Help from "./componants/frontend/homepages/help";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="signin" element={<SignInPage />}></Route>
          <Route path="CartSection" element={<CartSection />}></Route>
          <Route path="Help" element={<Help/>}></Route>  
          <Route path="*" element={<div> nothing in it</div>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
