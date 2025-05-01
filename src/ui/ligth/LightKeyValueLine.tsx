import React from "react";

interface LightKeyValueLineProps {
  label: string;
  value: string | number;
  options?: {
    labelStyle?: React.CSSProperties;
    valueStyle?: React.CSSProperties;
  };
}

export const LightKeyValueLine: React.FC<LightKeyValueLineProps> = ({
  label,
  value,
  options,
}) => {
  return (
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
            color: "#676E7A",
            fontSize: "16px",
            fontWeight: 400,
            ...options?.labelStyle,
          }}
        >
          {label}
        </span>
        <span
          style={{
            color: "#000",
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
          backgroundColor: "rgba(196, 196, 196)",
          marginBottom: "15px",
        }}
      />
    </>
  );
};
