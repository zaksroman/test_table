import styles from'./App.module.css';
import DataTable from "./Components/Table/DataTable";
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)


  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const jsonData = await response.json();
      jsonData.results.map((item) => {
        item.height = Number(item.height)
        item.mass = Number(item.mass)
      })
      dispatch({type: 'SET_DATA', payload: jsonData.results})
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const clearData = () => {
    dispatch({type: 'CLEAR_DATA', payload: data});
  };

  return (
      <div>
        <button onClick={fetchData}>Загрузить данные</button>
        <button onClick={clearData}>Очистить таблицу</button>
        {isLoading ? (
            <p>Загрузка данных...</p>
        ) : (
            <DataTable/>
        )}
      </div>
  );
};

export default App;
