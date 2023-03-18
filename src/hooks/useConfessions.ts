import { useContext } from "react";
import { ConfessionContext } from "@/context/confessionContext";

export default function useConfessions() {
  return useContext(ConfessionContext);
}
