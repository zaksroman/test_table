import {useDispatch, useSelector} from "react-redux";
import DataItem from "../DataItem/DataItem";

const DataTable = () => {
    const data = useSelector(state => state.data)
    const sortBy = useSelector(state => state.sortBy)
    const sortOrder = useSelector(state => state.sortOrder)
    const dispatch = useDispatch()

    const sortData = (field) => {
        return [...data].sort((a, b) => {
            if (field === 'height' || field === 'weight') {
                return sortOrder === 'asc' ? a[field] - b[field] : b[field] - a[field];
            } else {
                if (a[field] < b[field]) {
                    return sortOrder === 'asc' ? -1 : 1;
                }
                if (a[field] > b[field]) {
                    return sortOrder === 'asc' ? 1 : -1;
                }
                return 0;
            }
        });
    };

    const handleSort = (field) => {
        dispatch({type: 'SET_SORTBY', payload: field})
        dispatch({type: 'SET_SORTORDER', payload: (sortOrder === 'asc' ? 'desc' : 'asc')})
    };

    const sortedData = sortBy ? sortData(sortBy) : data;

    return (
        <table>
            <thead>
            {data.length !== 0 &&
                <tr>
                    <th onClick={() => handleSort('name')}>Имя</th>
                    <th onClick={() => handleSort('height')}>Рост</th>
                    <th onClick={() => handleSort('mass')}>Вес</th>
                    <th onClick={() => handleSort('hair_color')}>Цвет волос</th>
                    <th onClick={() => handleSort('skin_color')}>Цвет кожи</th>
                </tr>
            }
            </thead>

            {data.length === 0 && ('Нет данных')}

            <tbody>
            {sortedData.map((item) => (
                <DataItem
                    key={item.name}
                    item={item}
                />
            ))}
            </tbody>
        </table>
    );
};

export default DataTable;
