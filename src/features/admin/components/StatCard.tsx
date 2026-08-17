import { type ReactNode } from "react";
import "./StatCard.css";

interface StatCardProps {
  title: string;
  value: number;
  icon?: ReactNode;
  variant?: "default" | "warning";
}

export function StatCard({
  title,
  value,
  icon,
  variant = "default",
}: StatCardProps) {
  return (
    <article className={`stat-card stat-card--${variant}`}>
      {icon && <div className="stat-card__icon">{icon}</div>}
      <div className="stat-card__content">
        <h3 className="stat-card__title">{title}</h3>
        <p className="stat-card__value">{value}</p>
      </div>
    </article>
  );
}
