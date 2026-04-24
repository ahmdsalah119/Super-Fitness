import { createContext, useState } from "react";

export interface AiSidebarContextType {
  isOpen: boolean;
  toggle: () => void;
}

// Context
export const AiSidebarContext = createContext<AiSidebarContextType | null>(
  null,
);

export function AiSidebarProvider({ children }: { children: React.ReactNode }) {
  // state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AiSidebarContext.Provider
      value={{
        isOpen,
        toggle: () => setIsOpen((prev) => !prev),
      }}
    >
      {children}
    </AiSidebarContext.Provider>
  );
}
