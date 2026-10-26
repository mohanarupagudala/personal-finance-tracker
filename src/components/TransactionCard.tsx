import type { Transaction } from "../types/Transaction";

interface TransactionCardProps {
  transaction: Transaction;
  onDelete?: (id: number) => void;
}

export default function TransactionCard({
  transaction,
  onDelete,
}: TransactionCardProps) {

  return (
    <div>

      <h3>{transaction.title}</h3>

      <p>Amount: ₹{transaction.amount}</p>

      <p>Type: {transaction.type}</p>

      <p>Category: {transaction.category}</p>

      <p>Date: {transaction.date}</p>

      {onDelete && (
        <button
          onClick={() => onDelete(transaction.id)}
        >
          Delete
        </button>
      )}

    </div>
  );
}