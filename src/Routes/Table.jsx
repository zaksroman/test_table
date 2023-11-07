import DataTable from "../Components/Table/DataTable";
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";

const Table = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/form');
    }

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
            <button onClick={handleClick}>Добавить строку</button>
            {isLoading ? (
                <p>Загрузка данных...</p>
            ) : (
                <DataTable/>
            )}
        </div>
    );
};

export default Table;
