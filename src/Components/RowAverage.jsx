import React from "react";

function RowAverage({ getState,  getAverageColumns}) {
    let rowIndex = 0;
    let AverageCell = getState().matrix[0].map(() => <div className="cell cell-other" key={rowIndex}>{getAverageColumns(rowIndex++)}</div>);

    return (
        <div className="row row-average">
            <span className="text">Average: </span>
            { AverageCell }
        </div>
    );
}

export default RowAverage;