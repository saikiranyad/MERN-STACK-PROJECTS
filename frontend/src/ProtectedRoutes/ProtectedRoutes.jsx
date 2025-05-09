import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children, allowedUserType }) => {


  if (!users) {
    return <Navigate to="/login" />;
  }

  // Check if user's role exists in the allowedUserType array
  if (allowedUserType && !allowedUserType.includes(users?.userType)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
