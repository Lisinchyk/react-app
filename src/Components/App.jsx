import React from 'react';
import './App.scss';
import Row from "./Row";
import RowAverage from "./RowAverage";

function App({ store }) {
    let idKey = 0;
    let rowItem;
    let RowAverage1;
    let emptyMessage;
    let mRows = 0;
    let nColumns = 0;

    if (store.getState().length !== 0) {
        rowItem = store
            .getState()
            .map(row => <Row row={row}
                   rowId={idKey}
                   sum={store.getRowSum(idKey)}
                   store={store}
                   key={`row${idKey++}`}
        />);
        RowAverage1 = <RowAverage store={store}/>;
        mRows = store.getState().length;
        nColumns = store.getState()[0].length;
    } else {
        emptyMessage = <div className="title-box">Enter value!</div>;
    }

    return (
        <div className="App">
            <header className="header">
                <button className="btn" onClick={() => store.addRow()}>Add row</button>
                <h1 className="title">Matrix M = {mRows}, N = {nColumns}</h1>
            </header>
            { emptyMessage }
            { rowItem }
            { RowAverage1 }
        </div>
    );
}

export default App;