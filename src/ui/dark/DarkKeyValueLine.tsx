// src/UI/dark/DarkKeyValueLine.tsx
import React from "react";

interface Props {
  label: string;
  value: string | number;
  options?: {
    labelStyle?: React.CSSProperties;
    valueStyle?: React.CSSProperties;
  };
}

export const DarkKeyValueLine: React.FC<Props> = ({
  label,
  value,
  options,
}) => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "12px",
      }}
    >
      <span
        style={{
          color: "#B4B4B4",
          fontSize: "16px",
          fontWeight: 400,
          ...options?.labelStyle,
        }}
      >
        {label}
      </span>
      <span
        style={{
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: 500,
          ...options?.valueStyle,
        }}
      >
        {value}
      </span>
    </div>
    <div
      style={{
        height: "1px",
        backgroundColor: "rgba(196, 196, 196, 0.3)",
        marginBottom: "15px",
      }}
    />
  </>
);
