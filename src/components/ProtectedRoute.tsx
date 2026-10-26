import {
  Navigate,
} from "react-router-dom";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

export default function ProtectedRoute({
  isLoggedIn,
  children,
}: ProtectedRouteProps) {

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}