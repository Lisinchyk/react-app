import reRenderDOM from "../index";

class Cell {
    constructor(id) {
        this.id = id;
        this.amount = setAmount();
        this.active = false;
    }
}

let store = {
    state: {
        matrix: [],
        formValues: {
            rowValue: '',
            colValue: '',
        }
    },

    getState() {
        return this.state;
    },
    setState(objVal) {
        this.state.matrix = buildMatrix(objVal.rowValue, objVal.colValue);
    },
    handleClick(row, id) {
        row.forEach(cell => {
            if (+id === cell.id) {
                cell.amount = cell.amount+1;
                reRenderDOM();
            }
        });
    },
    addRow() {
        let arr = this.state.matrix;
        let row = [];
        let lastID = 0;
        let lastArr;
        let cellAmount = 3;

        if (this.state.matrix.length !== 0) {
            lastArr = arr[arr.length-1];
            lastID = arr[arr.length-1][lastArr.length-1].id;
            cellAmount = lastArr.length;
        }

        for (let i = 0; i < cellAmount; i++) {
            row.push(new Cell(++lastID));
        }

        this.state.matrix.push(row);
        reRenderDOM();
    },
    deleteRow(rowId) {
        store.getState().matrix.splice(rowId, 1);
        reRenderDOM();
    },
    getRowSum(rowIndex = 0) {
        let sum = 0;
        this.state.matrix[rowIndex].map(item => sum+= item.amount);
        return sum;
    },
    getAverageColumns(col = 0) {
        let arr = this.state.matrix;
        let result;
        let sum = 0;

        arr.map(row => sum += row[col].amount);
        result = parseInt(sum / arr.length * 100) / 100;
        return result;
    },
    handleMouse({row, sum}, action) {
        row.forEach(item => {
            switch (action) {
                case 'SHOW_PERCENT':
                    item.percent = parseInt(item.amount*100/sum * 100) / 100;
                    break;
                case  'HIDE_PERCENT':
                    if (item.percent) {
                        delete item.percent;
                    }
                    break;
                default:
                    return;
            }
        });

        reRenderDOM();
    },
    cellSiblingShow(action, val) {
        this.state.matrix.forEach(row => {
            if (action === 'MOUSE_ENTER') {
                row.forEach(item => {
                    if (val - 100 <= item.amount && item.amount <= val + 100) {
                        item.style = true;
                    }
                });
            } else if (action === 'MOUSE_LEAVE') {
                row.forEach(item => (item.style) ? delete item.style : '');
            }
        });
        reRenderDOM();    },
    handleInputs(value, action) {
    switch (action) {
        case 'INPUT-ROW':
            this.state.formValues.rowValue = value;
            break;
        case 'INPUT-COLUMN':
            this.state.formValues.colValue = value;
            break;
        case 'SEND-INPUTS':
            store.setState(this.state.formValues);
            this.state.formValues = {
                rowValue: '',
                colValue: ''
            }
            break;
    }
    reRenderDOM();
}
};

function setAmount(min = 100, max = 999) {
    return parseInt(Math.random() * (max - min) + min);
}

function buildMatrix(m = 3, n = 3) {
    let matrix = [];
    let id = 1;
    for (let i = 0; i < m; i++) {
        let row = [];

        for (let j = 0; j < n; j++) {
            const cell = new Cell(id++);
            row.push(cell);
        }
        matrix.push(row);
    }
    return matrix;
}

export default store;