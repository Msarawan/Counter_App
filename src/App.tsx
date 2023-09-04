import "@patternfly/react-core/dist/styles/base.css";
import Counter from './components/Counter';
import {Route,Routes } from "react-router-dom";
import './App.css';
import {
  Breadcrumb,
  BreadcrumbItem
} from "@patternfly/react-core";
import {FormSection} from "./components/FormSection";
import { TemperatureConverter } from "./components/TemperatureConverter";
import { Calculator } from "./components/Calculator";

function App() {
  return (
        <>
            <Breadcrumb>
              <BreadcrumbItem to="/">Counter Page</BreadcrumbItem>
              <BreadcrumbItem to="/form">Form Page</BreadcrumbItem>
              <BreadcrumbItem to="/temperature">Temperature Convertor</BreadcrumbItem>
              <BreadcrumbItem to="/calculator">Calculator</BreadcrumbItem>
              <BreadcrumbItem to="#" isActive>
                Section landing
              </BreadcrumbItem>
            </Breadcrumb>
            <Routes>
              <Route path="/" element={<Counter initialValue={0} />} />
              <Route path="/form" element={<FormSection />} />
              <Route path="/temperature" element={<TemperatureConverter />} />
              <Route path="/calculator" element={<Calculator/>} />
            </Routes>
        </>
  );
}
export default App;
