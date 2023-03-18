import { createContext } from "react";

type AuthContextProps = {
  session?: {
    expires: string;
    user: { email: string; image: string; name: string };
  };
};

export const AuthContext = createContext<AuthContextProps>({
  session: {
    expires: "",
    user: { email: "", image: "", name: "" },
  },
});

export function AuthProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: AuthContextProps["session"];
}) {
  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}
