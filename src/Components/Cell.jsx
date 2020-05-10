import React from "react";

export default function Cell({row, store}) {
    let style;
    let cellItem = row.map(cell => {
        let styles = {
            active: {
                background: `linear-gradient(to right, red ${parseInt(cell.percent)}%, #00bfff 0)`,
            },
            static: {
                backgroundColor: "#00bfff",
            },
            show: {
                backgroundColor: "red",
            },
        };

        if (cell.percent) {
            style = styles.active
        } else if (cell.style) {
            style = styles.show;
        } else {
            style = styles.static;
        }

        return <div className='cell'
                    style={style}
                    onClick={(event) => store.handleClick(row, event.target.id)}
                    onMouseEnter={() => store.cellSiblingShow('MOUSE_ENTER', cell.amount)}
                    onMouseLeave={() => store.cellSiblingShow('MOUSE_LEAVE')}
                    key={cell.id}
                    id={cell.id}
        >{(cell.percent) ? `${cell.percent}%` : cell.amount}</div>
    });

    return <div className="cellWrapper">{ cellItem }</div>;
}