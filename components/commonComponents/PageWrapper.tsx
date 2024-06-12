// components/PageWrapper.tsx
import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  overflowAuto?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, overflowAuto = false }) => {
  return (
    <div className={`w-full h-full ${overflowAuto ? "overflow-auto" : ""}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
