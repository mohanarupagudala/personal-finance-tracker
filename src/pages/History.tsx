import { useState } from "react";

import TransactionCard from "../components/TransactionCard";

import type { Transaction } from "../types/Transaction";

import styles from "./History.module.css";

interface HistoryProps {
  transactions: Transaction[];
  onDelete: (id: number) => void;
}

export default function History({
  transactions,
  onDelete,
}: HistoryProps) {

  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState("All Categories");

  const filteredTransactions =
    transactions.filter((transaction) => {

      const matchesSearch =
        transaction.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All Categories" ||
        transaction.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        Transaction History
      </h1>

      <p className={styles.subtitle}>
        Search and manage your transactions
      </p>

      <div className={styles.filters}>

        <input
          className={styles.search}
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className={styles.select}
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>All Categories</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Salary</option>
          <option>Entertainment</option>
          <option>Health</option>
          <option>Other</option>
        </select>

      </div>

      <p className={styles.count}>
        Showing {filteredTransactions.length}{" "}
        of {transactions.length} transactions
      </p>

      <div className={styles.list}>

        {filteredTransactions.length === 0 ? (

          <div className={styles.empty}>
            No transactions match your filters
          </div>

        ) : (

          filteredTransactions.map(
            (transaction) => (
              <TransactionCard
                key={transaction.id}
                transaction={transaction}
                onDelete={onDelete}
              />
            )
          )

        )}

      </div>

    </div>
  );
}