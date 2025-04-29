// src/factory/LightUIFactory.tsx
import { UIFactory } from "./UIFactory";

export class LightUIFactory implements UIFactory {
  createButton(
    label: string,
    onClick: () => void,
    disabled = false
  ): JSX.Element {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: disabled ? "#19439B" : "#2563eb",
          color: disabled ? "#B4B4B4" : "#ffffff",
          padding: "14px 24px",
          borderRadius: "10px",
          border: "none",
          marginTop: "8px",
          cursor: disabled ? "not-allowed" : "pointer",
          fontSize: "16px",
          fontWeight: "600",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      >
        {label}
      </button>
    );
  }

  createInput(
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ): JSX.Element {
    return (
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: "#f9fafb",
          color: "#111827",
          padding: "14px 20px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          width: "91%",
          marginTop: "6px",
          marginBottom: "24px",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.3s ease",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#2563eb")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
      />
    );
  }

  createSelect(
    options: { label: string; value: string }[],
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  ): JSX.Element {
    return (
      <select
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: "#f9fafb",
          color: "#111827",
          padding: "14px 20px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          width: "100%",
          marginTop: "6px",
          marginBottom: "24px",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.3s ease",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#2563eb")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }

  createContainer(children: React.ReactNode): JSX.Element {
    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          color: "#111827",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "450px",
          margin: "60px auto",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        {children}
      </div>
    );
  }
}
