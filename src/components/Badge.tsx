interface BadgeProps {
  type: "income" | "expense";
}

export default function Badge({
  type,
}: BadgeProps) {

  return (
    <span>
      {type}
    </span>
  );
}