import React from "react";

function RowAverage({ store }) {
    let rowIndex = 0;
    let AverageCell = store.getState()[0].map(() => <div className="cell cell-other" key={rowIndex}>{store.getAverageColumns(rowIndex++)}</div>);

    return (
        <div className="row row-average">
            <span className="text">Average: </span>
            { AverageCell }
        </div>
    );
}

export default RowAverage;