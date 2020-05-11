import React from "react";
import Cell from "./Cell";

const Row = ({row, sum, handleMouse, rowId, deleteRow, handleClick, cellSiblingShow }) => {

    return (
        <div className="row">
            <div className="buttons">
                <button className="del-btn" onClick={() => deleteRow(rowId)}>-</button>
            </div>
            <Cell row={row} handleClick={handleClick} cellSiblingShow={cellSiblingShow}/>
            <div className="cell cell-other"
                 onMouseEnter={() => handleMouse({row, sum}, 'SHOW_PERCENT')}
                 onMouseLeave={() => handleMouse({row}, 'HIDE_PERCENT')}
            >Sum: {sum}</div>
        </div>
    );
}

export default Row;