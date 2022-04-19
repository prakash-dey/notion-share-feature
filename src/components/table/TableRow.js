import { useState, useEffect } from "react";




// Component-3 in heirarchy

// History table row component
const NestedTableRow = ({ item, handler, idx }) => {
    const [noOfOrders, setNoOfOrders] = useState(item.no_of_orders);
    const handleChange = (e) => {
        setNoOfOrders(parseInt(e.target.value));
        handler("no_of_orders", parseInt(e.target.value), idx);
    };



    return (
        <tr>
            <td>
                <div className="sub-heading">Order Id</div>
                {item.order_id}
            </td>

            <td><div className="sub-heading">No of Orders</div>
                <input type="number" value={noOfOrders} onChange={handleChange} autoFocus />
            </td>

            <td><div className="sub-heading">Amount</div>
                {item.amount}
            </td>
        </tr>
    );
};


// **********************************************************************************//

// Component-2 in heirarchy

// The history table component

const NestedTable = ({ data, dispatch }) => {
    let order = 0,
        amt = 0;

    const initData = data.history;

    const [totalOrder, setTotalOrder] = useState(0);
    const [totalAmt, setTotalAmt] = useState(0);
    const [noOfOrders, setNoOfOrders] = useState(initData);


    // Stroing information changes in a variabale so that when clicked on update button we can send them through dispatch function and make the changes.

    const handleOrderChange = (name, val, idx) => {
        const tempResult = noOfOrders.map((item, index) => {
            if (index === idx) {
                const amount = val * data.price;
                return { ...item, [name]: val, amount: amount };
            } else return item;
        });

        setNoOfOrders(tempResult);
    };


    // Calculation the total order and total amount as per the change so that we can update the main object

    const totalOrderAndAmt = () => {
        order = 0;
        amt = 0;
        console.log(noOfOrders);
        noOfOrders.forEach((item) => {

            order += item.no_of_orders;
            amt += item.amount;

        });


        console.log("total", amt, order);
        setTotalAmt(amt);
        setTotalOrder(order);
        console.log("totalA", totalOrder, totalAmt);


    };


    // Controlling sideffects in rendering the total order and total amount
    useEffect(() => {
        console.log("Calling Useeffect");
        updateData();
    }, [totalOrder, totalAmt]);




    // Updating the datas based on the changes
    const updateData = () => {
        totalOrderAndAmt();

        console.log("totalAU", totalAmt, totalOrder);
        dispatch({
            type: "updateData",
            id: data.id,
            total_order: totalOrder,
            total_amount: totalAmt,
            history: noOfOrders,
        });
    };

    return (
        <div className="history-table-cont">
            <table className="history-table">

                <tbody>
                    {data.history.map((item, idx) => (
                        <NestedTableRow
                            item={item}
                            key={item.order_id}
                            handler={handleOrderChange}
                            idx={idx}
                        />
                    ))}
                </tbody>
            </table>
            <div className="btn-cont">
                <button className="btn-update" onClick={updateData}>
                    Update
                </button>
            </div>
        </div>
    );
};



// **********************************************************************************//
// Component -1 in heirarchy

// Table row-> the first row contains the infromation which are not hidden and second rown contains informations that are displayed after clicking.


function TableRow({ item, dispatch }) {

    const handleClick = (e, id, type) => {

        e.stopPropagation();
        dispatch({ type: type, id: id });
    };

    return (
        <>
            <tr id={item.id} className={`outer-tr ${item.isOpen ? 'active' : ''}`} onClick={(e) => handleClick(e, item.id, "toggleOpen")}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.total_order}</td>
                <td>{item.total_amount}</td>

                <td>
                    <button
                        className="btn-lock"
                        onClick={(e) => handleClick(e, item.id, "toggleLock")} style={{ backgroundColor: item.isDisable ? '#ff000040' : '#3838fb' }}
                    >
                        {item.isDisable ? (
                            <i className="uil uil-lock"></i>
                        ) : (
                            <i className="uil uil-unlock-alt"></i>
                        )}
                    </button>
                </td>
            </tr>
            {item.isOpen && (
                <tr className="inner-tr">
                    <td colSpan={5}>
                        <NestedTable data={item} dispatch={dispatch} />
                    </td>
                </tr>
            )}
        </>
    );
}

export default TableRow;
