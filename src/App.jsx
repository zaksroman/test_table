import styles from'./App.module.css';
import DataTable from "./Components/Table/DataTable";
import {useState} from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const jsonData = await response.json();
      setData(jsonData.results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const clearData = () => {
    setData([]);
  };

  return (
      <div>
        <button onClick={fetchData}>Загрузить данные</button>
        <button onClick={clearData}>Очистить таблицу</button>
        {isLoading ? (
            <p>Загрузка данных...</p>
        ) : (
            <DataTable
                data={data}
            />
        )}
      </div>
  );
};

export default App;
