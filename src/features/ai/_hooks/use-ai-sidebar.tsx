import { use } from "react";
import {
  AiSidebarContext,
  AiSidebarContextType,
} from "../providers/AiSidebarContext";

export default function useAiSidebar(): AiSidebarContextType {
  const context = use(AiSidebarContext);

  if (!context) {
    throw new Error("useAiSidebar must be used within an AiSidebarProvider");
  }

  return context;
}
