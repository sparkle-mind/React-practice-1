import "./App.css";
import UseStateMethod from "./components/useStateMethod/UseStateMethod";
import Props from "./components/props/Props";
import DashboardPage from "./pages/dashbord/DashboardPage";
import Netflix from './components/netflix/Netflix';
import Shoes from './components/shoes/Shoes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TableCompo from "./components/table/TableCompo";
import NoPage from "./pages/dashbord/NoPage";
import Propagation from "./components/propagation/Propagation";
import DerivedState from "./components/derived-state/DerivedState";
import { Tabbings } from "./components/tabs/Tabbings";

function App() {
  return (
    <>
      <div className="main-wrp">
        <Router>
          <Routes>
            <Route path="/" element={<DashboardPage />}>
              <Route index element={<TableCompo />} />
              <Route path="netflix" element={<Netflix />} />
              <Route path="shoes" element={<Shoes />} />
              <Route path="props" element={<Props />} />
              <Route path="useStateMethod" element={<UseStateMethod />} />
              <Route path="propagation" element={<Propagation />} />
              <Route path="derived-state" element={<DerivedState />} />
              <Route path="tabs" element={<Tabbings />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
      </div>


    </>
  );
}

export default App;
