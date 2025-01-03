import { useState, useEffect } from "react";
import { SnackbarProvider } from "notistack";
import { ExpenseTracker, Transactions } from "./components";
import { TransactionContext } from "./context/TransactionContext";
import "./App.css";

function App() {
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [combinedExpenseData, setCombineExpenseData] = useState([]);

  const value = {
    recentTransactions,
    setRecentTransactions,
    combinedExpenseData,
    setCombineExpenseData,
  };

  useEffect(() => {
    
    if (!localStorage.getItem("walletBalance")) {
      localStorage.setItem("walletBalance", "5000");
    }

   
    if (!localStorage.getItem("recentTransactions")) {
      localStorage.setItem("recentTransactions", JSON.stringify([]));
    }

    if (!localStorage.getItem("expenses")) {
      localStorage.setItem("expenses", "0");
    }
  }, []);

  return (
    <>
      <TransactionContext.Provider value={value}>
        <SnackbarProvider>
          <div className="expense-paper">
            <ExpenseTracker />
            <Transactions />
          </div>
        </SnackbarProvider>
      </TransactionContext.Provider>
    </>
  );
}

export default App;
