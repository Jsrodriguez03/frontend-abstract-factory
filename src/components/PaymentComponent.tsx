// src/components/PaymentComponent.tsx
import { useState } from "react";
import { UIFactory } from "../factory/UIFactory";
import axios from "axios";
import Swal from "sweetalert2";

interface PaymentComponentProps {
  uiFactory: UIFactory;
}

export const PaymentComponent = ({ uiFactory }: PaymentComponentProps) => {
  const [paymentType, setPaymentType] = useState("Seleccione un Método");
  const [amount, setAmount] = useState("");
  const isFormValid =
    amount.trim() !== "" && paymentType !== "Seleccione un Método";
  const [notificationType, setNotificationType] = useState("EMAIL");
  const [response, setResponse] = useState<any>(null);
  const [showSummary, setShowSummary] = useState(false); // 👈 nueva vista

  const handlePayment = async () => {
    setShowSummary(true);
  };

  const handleSendNotification = async () => {
    try {
      const res = await axios.post("http://localhost:8080/payment/pay", null, {
        params: { paymentType, amount, notificationType },
      });
      setResponse(res.data);
      Swal.fire({
        toast: true,
        position: "bottom-end", // esquina superior derecha
        icon: "success",
        title: "¡Notificación Enviada!",
        showConfirmButton: false,
        timer: 5000, // se cierra automáticamente en 2 segundos
        timerProgressBar: true,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Error al enviar notificación",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  const handleNewPayment = () => {
    setAmount("");
    setPaymentType("Seleccione un Método");
    setNotificationType("EMAIL");
    setResponse(null);
    setShowSummary(false);
  };

  if (showSummary) {
    return uiFactory.createContainer(
      <>
        <h2
          style={{ fontSize: "22px", fontWeight: "600", marginBottom: "20px" }}
        >
          Resumen del Pago
        </h2>
        <p>
          <strong>Método:</strong> {paymentType}
        </p>
        <p>
          <strong>Monto:</strong> ${amount}
        </p>
        <p>
          <strong>Total a Pagar:</strong> ${amount}
        </p>

        <label
          htmlFor="notification"
          className="block text-[10px] font-semibold mb-1"
          style={{ color: "#B4B4B4" }}
        >
          Tipo de Notificación
        </label>
        {uiFactory.createSelect(
          [
            { label: "Email", value: "EMAIL" },
            { label: "SMS", value: "SMS" },
            { label: "PUSH", value: "PUSH" },
            { label: "WhatsApp", value: "WHATSAPP" },
          ],
          notificationType,
          (e) => setNotificationType(e.target.value)
        )}

        <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
          {uiFactory.createButton("Realizar otro pago", handleNewPayment)}
          {uiFactory.createButton(
            "Enviar notificación",
            handleSendNotification
          )}
        </div>
      </>
    );
  }

  return uiFactory.createContainer(
    <>
      <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>
        Calcular Pago
      </h1>

      <label htmlFor="payment" style={{ fontSize: "15px", color: "#B4B4B4" }}>
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

      <label htmlFor="amount" style={{ fontSize: "15px", color: "#B4B4B4" }}>
        Monto
      </label>
      {uiFactory.createInput("Ingrese el monto", amount, (e) =>
        setAmount(e.target.value)
      )}

      {uiFactory.createButton("Pagar", handlePayment, !isFormValid)}
    </>
  );
};
