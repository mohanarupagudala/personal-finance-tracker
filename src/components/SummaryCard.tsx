interface SummaryCardProps {
  title: string;
  value: number;
}
export default function SummaryCard({ title, value,}: SummaryCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>₹{value}</p>
    </div>
  );
}