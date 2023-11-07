import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './Form.module.css'

const Form = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [mass, setMass] = useState('')
    const [hair_color, setHair_color] = useState('')
    const [skin_color, setSkin_color] = useState('')

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const heightHandler = (e) => {
        setHeight(e.target.value)
    }

    const massHandler = (e) => {
        setMass(e.target.value)
    }

    const hair_colorHandler = (e) => {
        setHair_color(e.target.value)
    }

    const skin_colorHandler = (e) => {
        setSkin_color(e.target.value)
    }

    const addRow = () => {
        const newRow = {
            name: name,
            height: Number(height),
            mass: Number(mass),
            hair_color: hair_color,
            skin_color: skin_color
        }

        dispatch({type: 'ADD_ROW', payload: newRow})
        navigate(-1)
        alert('Строка успешно добавлена')
    }

    const actionButton = name && height && mass && hair_color && skin_color

    return (
        <div className={styles.form_container}>
            <input
                className={styles.form_input}
                type="text"
                placeholder={'Имя'}
                onChange={nameHandler}/>
            <input
                className={styles.form_input}
                type="number"
                step="1"
                placeholder={'Рост'}
                onChange={heightHandler}/>
            <input
                className={styles.form_input}
                type="number"
                step="1"
                placeholder={'Вес'}
                onChange={massHandler}/>
            <input
                className={styles.form_input}
                type="text"
                placeholder={'Цвет волос'}
                onChange={hair_colorHandler}/>
            <input
                className={styles.form_input}
                type="text"
                placeholder={'Цвет кожи'}
                onChange={skin_colorHandler}/>
            <button
                className={`${styles['form_button']} ${!actionButton ? styles.disabled : ''}`}
                onClick={addRow}
                disabled={!actionButton}
            >Добавить строку
            </button>
        </div>
    );
};

export default Form;