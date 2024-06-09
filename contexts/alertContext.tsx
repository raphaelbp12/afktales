// components/alertContext.tsx
"use client";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import Alert from "../components/Alert";

interface AlertMessage {
  id: number;
  message: string;
  src: string;
  createdAt: number;
  duration: number; // duration in milliseconds
}

interface AlertContextType {
  addAlert: (message: string, src: string, duration?: number) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alerts, setAlerts] = useState<AlertMessage[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setAlerts((prevAlerts) =>
        prevAlerts.filter((alert) => now - alert.createdAt < alert.duration)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addAlert = (message: string, src: string, duration: number = 5000) => {
    const newAlert: AlertMessage = {
      id: Date.now(),
      message,
      src,
      createdAt: Date.now(),
      duration,
    };
    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  };

  return (
    <AlertContext.Provider value={{ addAlert }}>
      {children}
      <div className="fixed top-0 left-0 right-0 flex flex-col items-center space-y-2 p-4 z-30">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            message={alert.message}
            src={alert.src}
            duration={alert.duration}
            createdAt={alert.createdAt}
          />
        ))}
      </div>
    </AlertContext.Provider>
  );
};
