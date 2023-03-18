import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

export default function useSession() {
  return useContext(AuthContext);
}
