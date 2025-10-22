import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";
import "./StatsLien.css";
import { useTranslation } from "react-i18next";

function StatsLien() {
  const { t } = useTranslation();

  const data = [
    { name: t("january"), daromad: 800, chiqim: 300, foyda: 50 },
    { name: t("february"), daromad: 320, chiqim: 280, foyda: 40 },
    { name: t("march"), daromad: 500, chiqim: 350, foyda: 150 },
    { name: t("april"), daromad: 450, chiqim: 380, foyda: 70 },
    { name: t("may"), daromad: 600, chiqim: 420, foyda: 180 },
    { name: t("june"), daromad: 700, chiqim: 500, foyda: 200 },
    { name: t("july"), daromad: 650, chiqim: 550, foyda: 100 },
    { name: t("august"), daromad: 800, chiqim: 600, foyda: 200 },
    { name: t("september"), daromad: 900, chiqim: 720, foyda: 180 },
    { name: t("october"), daromad: 750, chiqim: 640, foyda: 110 },
    { name: t("november"), daromad: 680, chiqim: 600, foyda: 80 },
    { name: t("december"), daromad: 720, chiqim: 580, foyda: 140 },
  ];

  // Yillik o‘rtacha foyda
  const avgProfit = Math.round(
    data.reduce((sum, item) => sum + item.foyda, 0) / data.length
  );

  // Tooltip dizayni
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const daromad = payload.find((p) => p.dataKey === "daromad");
      const chiqim = payload.find((p) => p.dataKey === "chiqim");
      const foyda = payload.find((p) => p.dataKey === "foyda");

      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          <p className="tooltip-item">
            💰 {t("income")}: {daromad?.value}
          </p>
          <p className="tooltip-item">
            💸 {t("expense")}: {chiqim?.value}
          </p>
          <p className="tooltip-item">
            📈 {t("profit")}: {foyda?.value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-wrapper">
      <h2 className="chart-title">{t("income_expense_chart")}</h2>

      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 40, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
          <XAxis dataKey="name" stroke="var(--chart-axis)" />
          <YAxis stroke="var(--chart-axis)" />
          <Tooltip content={<CustomTooltip />} />

          {/* Foyda ustuni */}
          <Bar
            dataKey="foyda"
            barSize={28}
            fill="var(--accent-primary)"
            radius={[8, 8, 0, 0]}
          />

          {/* Daromad chizig‘i */}
          <Line
            type="monotone"
            dataKey="daromad"
            stroke="var(--success-color)"
            strokeWidth={3}
            dot={false}
          />

          {/* Chiqim chizig‘i */}
          <Line
            type="monotone"
            dataKey="chiqim"
            stroke="var(--error-color)"
            strokeWidth={3}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* 📊 Yillik o‘rtacha foyda card */}
      <div className="average-card">
        <h3>📊 {t("average_annual_profit")}</h3>
        <p>{avgProfit} $</p>
      </div>
    </div>
  );
}

export default StatsLien;
