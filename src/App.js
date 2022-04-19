
import './App.css';
import Table from './components/table/Table';
import { useReducer } from 'react'
import { data } from './data/data'



function App() {
  const reducer = (state, action) => {
    switch (action.type) {

      // Controlling collpase
      case "toggleOpen":
        return state.map((item) => {
          if ((item.id === action.id) && (!item.isDisable)) {
            return { ...item, isOpen: !item.isOpen };
          } else {
            return { ...item, isOpen: false };
          }
        })

      // Toggling lock
      case "toggleLock":
        return state.map((item) => {
          if (item.id === action.id) {
            return (item.isDisable) ? { ...item, isDisable: !item.isDisable, isOpen: item.isOpen } : { ...item, isDisable: !item.isDisable, isOpen: false }
              ;
          } else {
            return item;
          }
        })

      // Updating any data
      case "updateData":
        // console.log('History',action.history);
        return state.map((item) => {
          if (item.id === action.id) {
            return  { ...item,total_amount:action.total_amount, total_order:action.total_order,history: action.history }
          } else {
            return item;
          }
        })

      default:
        return state;
    }
  };
  
  const [state, dispatch] = useReducer(reducer, data);



  return (
    <div className="App">
      <Table data={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
