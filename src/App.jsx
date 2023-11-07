import styles from'./App.module.css';
import Table from "./Routes/Table";
import Form from "./Routes/Form";
import {Routes, Route} from "react-router-dom";
const App = () => {

  return (
      <div>
          <Routes>
              <Route index element={<Table/>}/>
              <Route path={'/form'} element={<Form/>}/>
          </Routes>
      </div>
  );
};

export default App;
