import { useParams } from "react-router-dom";

import type { Transaction } from "../types/Transaction";

interface TransactionDetailProps {
  transactions: Transaction[];
}

export default function TransactionDetail({
  transactions,
}: TransactionDetailProps) {

  const { id } = useParams();

  const transaction = transactions.find(
    (item) => item.id === Number(id)
  );

  if (!transaction) {
    return <h2>Transaction not found</h2>;
  }

  return (
    <div>

      <h1>Transaction Details</h1>

      <p>Title: {transaction.title}</p>

      <p>Amount: ₹{transaction.amount}</p>

      <p>Type: {transaction.type}</p>

      <p>Category: {transaction.category}</p>

      <p>Date: {transaction.date}</p>

    </div>
  );
}