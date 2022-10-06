import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children, redirectTo = '/', ...props }) {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        // <Route {...props}>
            isLoggedIn ? children : <Navigate to={redirectTo} />
        // </Route>
    );
}
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { authSelectors } from 'authorization';

// export default function PrivateRoute({ children }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

//   return <>{isLoggedIn ? children : <Navigate to="/" />}</>;
// }