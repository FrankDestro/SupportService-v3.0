import "./styles.css";

type Props = {
  title: string;
  icon: string;
  value: string;
};

function SummaryCard({ title, icon, value }: Props) {
  return (
    <div>
      <div className="summary-card">
        <div className="summary-header">
          <div className="icon">{icon}</div>
          <h3>{title}</h3>
        </div>
        <div className="summary-value">{value}</div>
      </div>
    </div>
  );
}

export default SummaryCard;
