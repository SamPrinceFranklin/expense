import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <center><p>Made By Sam Prince Franklin with ⚛️ </p></center>
    <NewExpense onAddExpense ={addExpenseHandler}/>
    <Expenses items={expenses}/>
    

    </div>
  );
};

export default App;
