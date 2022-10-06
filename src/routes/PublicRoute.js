import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/',
    ...routeProps
}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        // <Route {...routeProps}>
            shouldRedirect ? <Navigate to={redirectTo} /> : children
        // </Route>
    );
}
