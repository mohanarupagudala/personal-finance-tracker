import SummaryCard from "../components/SummaryCard";
import TransactionCard from "../components/TransactionCard";
import type { Transaction } from "../types/Transaction";
import styles from "./Dashboard.module.css";
interface DashboardProps {
  transactions: Transaction[];
}
export default function Dashboard({
  transactions,
}: DashboardProps) {
  const totalIncome = transactions
    .filter((transaction) =>
      transaction.type === "income"
    )
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const totalExpenses = transactions
    .filter((transaction) =>
      transaction.type === "expense"
    )
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const balance = totalIncome - totalExpenses;

  const recentTransactions =
    transactions.slice(-5);

  return (
    <div className={styles.container}>

      <h1 className={styles.title}> Dashboard </h1>
      <p className={styles.subtitle}> Manage and track your personal finances</p>
      <div className={styles.summary}>
        <div className={styles.summaryCard}>
          <SummaryCard title="Total Balance" value={balance}/>
        </div>
        <div className={styles.summaryCard}>
          <SummaryCard title="Total Income" value={totalIncome} />
        </div>
        <div className={styles.summaryCard}><SummaryCard title="Total Expenses"value={totalExpenses}/>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Recent Transactions</h2>
        {transactions.length === 0 ? (
          <p>
            No transactions yet.
            Add one to get started!
          </p>

        ) : (
          recentTransactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              transaction={transaction}
            />
          ))
        )}
      </div>
    </div>
  );
}