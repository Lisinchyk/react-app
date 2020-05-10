import React from "react";
import Cell from "./Cell";

const Row = ({row, sum, store, rowId }) => {

    return (
        <div className="row">
            <div className="buttons">
                <button className="del-btn" onClick={() => store.deleteRow(rowId)}>-</button>
            </div>
            <Cell row={row} store={store}/>
            <div className="cell cell-other"
                 onMouseEnter={() => store.handleMouse({row, sum}, 'SHOW_PERCENT')}
                 onMouseLeave={() => store.handleMouse({row}, 'HIDE_PERCENT')}
            >Sum: {sum}</div>
        </div>
    );
}

export default Row;