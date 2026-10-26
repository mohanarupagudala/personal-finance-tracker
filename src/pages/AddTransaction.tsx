import {useEffect, useRef, useState,} from "react";

import { useNavigate } from "react-router-dom";

import type { Transaction } from "../types/Transaction";
import styles from "./AddTransaction.module.css";

interface AddTransactionProps {
  onAdd: (transaction: Transaction) => void;
}

export default function AddTransaction({
  onAdd,
}: AddTransactionProps) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] =
    useState<"income" | "expense">("income");

  const [category, setCategory] =
    useState("Food");

  const [date, setDate] = useState("");

  const titleRef =
    useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (title.length < 3) {
      alert("Title must be at least 3 characters");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    if (!date) {
      alert("Please select a date");
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      type: type,
      category: category,
      date: date,
    };

    onAdd(newTransaction);

    setTitle("");
    setAmount("");
    setType("income");
    setCategory("Food");
    setDate("");

    navigate("/history");
  };
return (
  <div className={styles.container}>

    <h1 className={styles.title}>
      Add Transaction
    </h1>

    <p className={styles.subtitle}>
      Add your income or expense transaction
    </p>

    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >

      <div className={styles.formGroup}>
        <label>Title:</label>

        <input
          ref={titleRef}
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
      </div>

      <div className={styles.formGroup}>
        <label>Amount:</label>

        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />
      </div>

      <div className={styles.formGroup}>
        <label>Type:</label>

        <select
          value={type}
          onChange={(e) =>
            setType(
              e.target.value as
                "income" | "expense"
            )
          }
        >
          <option value="income">
            Income
          </option>

          <option value="expense">
            Expense
          </option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Category:</label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Salary</option>
          <option>Entertainment</option>
          <option>Health</option>
          <option>Other</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Date:</label>

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />
      </div>

      <button
        type="submit"
        className={styles.button}
      >
        Add Transaction
      </button>

    </form>

  </div>
);
}