import './table.css'
import TableRow from './TableRow'


function Table({data,dispatch}) {
   
  return (
    <table className="container outer-table">
        <thead>
        <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Total Order</th>
            <th>Total Amount</th>
            <th></th>
        </tr>
        </thead> 
        <tbody>
            {
                data.map(item=>
                    <TableRow item={item} key={item.id} dispatch={dispatch}/>
                )
            }
        </tbody>
        
    </table>
  )
}

export default Table