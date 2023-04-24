import "@patternfly/react-core/dist/styles/base.css";
import Counter from './components/Counter';
import {Route,Routes } from "react-router-dom";
import './App.css';
import {
  Breadcrumb,
  BreadcrumbItem
} from "@patternfly/react-core";
import {FormSection} from "./components/FormSection";

function App() {
  return (
        <>
            <Breadcrumb>
              <BreadcrumbItem to="/">Counter Page</BreadcrumbItem>
              <BreadcrumbItem to="/form">Form Page</BreadcrumbItem>
              <BreadcrumbItem to="#" isActive>
                Section landing
              </BreadcrumbItem>
            </Breadcrumb>
            <Routes>
              <Route path="/" element={<Counter initialValue={0} />} />
              <Route path="/form" element={<FormSection />} />
            </Routes>
        </>
  );
}
export default App;
