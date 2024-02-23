import React from 'react';
import { Route, useNavigate} from 'react-router-dom';



const PrivateRoute = ({ component: Component, ...rest }) => {
const navigate=useNavigate();

  const isAuthenticated = true;// Check if the user is authenticated, e.g., by checking for a JWT cookie
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
                navigate("/sign")

        )
      }
    />
  );
};

export default PrivateRoute;
