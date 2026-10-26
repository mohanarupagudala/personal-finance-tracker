import type { Transaction } from "../types/Transaction";

interface ReportsProps {
  transactions: Transaction[];
}

export default function Reports({
  transactions,
}: ReportsProps) {

  const categories =
    transactions.reduce(
      (result, transaction) => {

        if (!result[transaction.category]) {
          result[transaction.category] = {
            total: 0,
            count: 0,
          };
        }

        result[transaction.category].total +=
          transaction.amount;

        result[transaction.category].count += 1;

        return result;

      },
      {} as Record<
        string,
        { total: number; count: number }
      >
    );

  return (
    <div>

      <h1>Reports</h1>

      <table>

        <thead>
          <tr>
            <th>Category</th>
            <th>Total Amount</th>
            <th>Transaction Count</th>
          </tr>
        </thead>

        <tbody>

          {Object.entries(categories).map(
            ([category, data]) => (

              <tr key={category}>

                <td>{category}</td>

                <td>₹{data.total}</td>

                <td>{data.count}</td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>
  );
}