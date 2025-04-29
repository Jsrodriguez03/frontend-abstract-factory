// src/components/PaymentComponent.tsx
import { useState } from "react";
import { UIFactory } from "../factory/UIFactory";
import axios from "axios";

interface PaymentComponentProps {
  uiFactory: UIFactory;
}

export const PaymentComponent = ({ uiFactory }: PaymentComponentProps) => {
  const [paymentType, setPaymentType] = useState("Seleccione un Método");
  const [amount, setAmount] = useState("");
  const isFormValid =
    amount.trim() !== "" && paymentType !== "Seleccione un Método";
  const [notificationType, setNotificationType] = useState("Seleccione");
  const [response, setResponse] = useState<any>(null);

  const handlePayment = async () => {
    try {
      const res = await axios.post("http://localhost:8080/payment/pay", null, {
        params: { paymentType, amount, notificationType },
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return uiFactory.createContainer(
    <>
      <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>
        Calcular Pago
      </h1>

      <label
        htmlFor="amount"
        className="block text-[10px] font-semibold mb-1"
        style={{ color: "#B4B4B4" }}
      >
        Método de Pago
      </label>
      {uiFactory.createSelect(
        [
          { label: "Seleccione un Método", value: "Seleccione un Método" },
          { label: "Tarjeta Crédito", value: "CREDIT_CARD" },
          { label: "Tarjeta Débito", value: "DEBIT_CARD" },
          { label: "PayPal", value: "PAYPAL" },
        ],
        paymentType,
        (e) => setPaymentType(e.target.value)
      )}

      <label
        htmlFor="amount"
        className="block text-[10px] font-semibold mb-1"
        style={{ color: "#B4B4B4" }}
      >
        Monto
      </label>
      {uiFactory.createInput("Ingrese el monto", amount, (e) =>
        setAmount(e.target.value)
      )}

      {/* {uiFactory.createSelect(
        [
          { label: "Email", value: "EMAIL" },
          { label: "SMS", value: "SMS" },
          { label: "PUSH", value: "PUSH" },
          { label: "WhatsApp", value: "WHATSAPP" },
        ],
        notificationType,
        (e) => setNotificationType(e.target.value)
      )} */}

      {uiFactory.createButton("Pagar", handlePayment, !isFormValid)}

      {response && (
        <div style={{ marginTop: "32px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
            Respuesta del servidor:
          </h3>
          <pre
            style={{
              background: "#1e293b",
              color: "#f1f5f9",
              padding: "20px",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
};
