import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import History from "./pages/History";
import TransactionDetail from "./pages/TransactionDetail";
import Reports from "./pages/Reports";
import ProtectedRoute from "./components/ProtectedRoute";

import type { Transaction } from "./types/Transaction";

export default function App() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const savedData = localStorage.getItem("transactions");

    if (savedData) {
      setTransactions(JSON.parse(savedData));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((previous) => [
      ...previous,
      transaction
    ]);
  };

  
  const deleteTransaction = (id: number) => {
    setTransactions((previous) =>
      previous.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  return (
    <Routes>

      <Route element={<Layout />}>
        <Route path="/"element={ <Dashboard transactions={transactions} />
          }
        />
        <Route path="/add" element={ <AddTransaction onAdd={addTransaction}/>
          }
        />
        <Route path="/history" element={ <History transactions={transactions} onDelete={deleteTransaction}
            />
          }
        />
        <Route path="/history/:id"element={ <TransactionDetail transactions={transactions}/>
          }
        />

        <Route path="/reports"  element={ <ProtectedRoute  isLoggedIn={isLoggedIn}
        >
              <Reports
                transactions={transactions}
              />
            </ProtectedRoute>
          }
        />

      </Route>

    </Routes>
  );
}