import React from 'react';
import './App.scss';
import Row from "./Row";
import RowAverage from "./RowAverage";
import Form from "./Form";

function App({ store }) {
    let idKey = 0;
    let rowItem;
    let RowAverage1;
    let addRowButton;
    let mRows = 0;
    let nColumns = 0;
    let Forms;

    if (store.getState().matrix.length !== 0) {
        rowItem = store.getState().matrix.map(row => <Row row={row}
                                                          rowId={idKey}
                                                          sum={store.getRowSum(idKey)}
                                                          handleMouse={store.handleMouse = store.handleMouse.bind(store)}
                                                          deleteRow={store.deleteRow = store.deleteRow.bind(store)}
                                                          handleClick={store.handleClick = store.handleClick.bind(store)}
                                                          cellSiblingShow={store.cellSiblingShow = store.cellSiblingShow.bind(store)}
                                                          key={`row${idKey++}`}/>);
        RowAverage1 = <RowAverage getAverageColumns={store.getAverageColumns = store.getAverageColumns.bind(store)}
                                  getState={store.getState = store.getState.bind(store)}/>;
        mRows = store.getState().matrix.length;
        nColumns = store.getState().matrix[0].length;
        addRowButton = <button className="btn" onClick={() => store.addRow()}>Add row</button>;
    } else {
        Forms = <Form formValues={store.state.formValues} handleInputs={store.handleInputs = store.handleInputs.bind(store)}/>;
    }

    return (
        <div className="App">
            <header className="header">
                { addRowButton }
                <h1 className="title">Matrix M = {mRows}, N = {nColumns}</h1>
            </header>
            { Forms }
            { rowItem }
            { RowAverage1 }
        </div>
    );
}

export default App;