import { useLoginSessionStore } from "../store/useLogInSession";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { loginData } = useLoginSessionStore();
  if (loginData?.userData?.accessToken) {
    return children;
  } else {
    return <Navigate to={"/login"} replace />;
  }
};
