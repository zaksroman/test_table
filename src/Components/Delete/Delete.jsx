import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import styles from './Delete.module.css'

const Delete = ({item}) => {

    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const modalHandler = () => {
        setShowModal(true)
    }

    const deleteHandler = () => {
        dispatch({type: 'DELETE_ROW', payload: item.name})
        setShowModal(false)
    }

    const leaveHandler = () => {
        setShowModal(false)
    }

    return (
        <div>
            { showModal && (
                   <div className={styles.modal}>
                        <div
                            className={styles.modal_content}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p>Вы действительно хотите удалить строку?</p>
                            <button onClick={leaveHandler}>Оставить</button>
                            <button onClick={deleteHandler}>Удалить</button>
                        </div>
                    </div>
            )}
            <button onClick={modalHandler}>Удалить</button>
        </div>
    );
};

export default Delete;