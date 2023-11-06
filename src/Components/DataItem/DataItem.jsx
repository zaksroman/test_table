import React from 'react';
import Delete from "../Delete/Delete";
import styles from './DataItem.module.css'

const DataItem = ({item}) => {

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.height}</td>
            <td>{item.mass}</td>
            <td>{item.hair_color}</td>
            <td>{item.skin_color}</td>
            <td>
                <Delete
                    item={item}
                />
            </td>
        </tr>
    );
};

export default DataItem;