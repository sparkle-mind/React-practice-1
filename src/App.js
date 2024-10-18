import "./App.css";
import UseStateMethod from "./components/useStateMethod/UseStateMethod";
import Props from "./components/props/Props";
import DashboardPage from "./pages/dashbord/DashboardPage";
import Netflix from './components/netflix/Netflix';
import Shoes from './components/shoes/Shoes';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableCompo from "./components/table/TableCompo";
import NoPage from "./pages/dashbord/NoPage";
import Propagation from "./components/propagation/Propagation";

function App() {
  return (
    <>
      <div className="main-wrp">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />}>
              <Route index element={<TableCompo />} />
              <Route path="netflix" element={<Netflix />} />
              <Route path="shoes" element={<Shoes />} />
              <Route path="props" element={<Props />} />
              <Route path="useStateMethod" element={<UseStateMethod />} />
              <Route path="propagation" element={<Propagation />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>


    </>
  );
}

export default App;
