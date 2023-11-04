import styles from './DataTable.module.css'


const DataTable = ({ data }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Рост</th>
                <th>Вес</th>
                <th>Цвет волос</th>
                <th>Цвет кожи</th>
            </tr>
            </thead>
            <tbody>
            {data.length === 0 && (<div>Нет данных</div>)}
            {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.height}</td>
                        <td>{item.mass}</td>
                        <td>{item.hair_color}</td>
                        <td>{item.skin_color}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default DataTable;
