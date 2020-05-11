import React from "react";
import style from './Forms.module.scss'

const Form = ({formValues, handleInputs}) => {

    return (
        <div className={style.inputs}>
            <div className={style.titleBox}>Enter values to create new Matrix</div>
            <label className={style.label}><span>Rows:</span>
                <input className={style.input} type="number"
                       placeholder="Enter rows (M)"
                       onChange={(event) => handleInputs(event.target.value, 'INPUT-ROW')}
                       value={formValues.rowValue}/>
            </label>
            <label className={style.label}><span>Columns:</span>
                <input className={style.input} type="number"
                       placeholder="Enter columns (N)"
                       onChange={(event) => handleInputs(event.target.value, 'INPUT-COLUMN')}
                       value={formValues.colValue}/>
            </label>
            <button className={style.btn} onClick={() => handleInputs('', 'SEND-INPUTS')}>add</button>
        </div>
    );
}

export default Form;