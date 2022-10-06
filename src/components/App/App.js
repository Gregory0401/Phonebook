import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from '../AppBar';
import { fetchCurrentUser } from 'redux/auth/auth-operation';
import Container from '../Container';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import { getFetchingCurrentUser } from 'redux/auth/auth-selectors';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home-page" */)
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "login-page" */)
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /* webpackChunkName: "register-page" */)
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /* webpackChunkName: "contacts-page" */)
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader
          className="Spinner"
          type="Circles"
          color="#1b39e2"
          height={300}
          width={300}
        />
      ) : (
        <>
          <AppBar />
          <ToastContainer />
          <Container>
            <Suspense
              fallback={
                <Loader
                  className="Spinner"
                  type="Circles"
                  color="#1b39e2"
                  height={300}
                  width={300}
                />
              }
            >
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
                    <PublicRoute>
                      <HomeView />
                    </PublicRoute>
                  }
                />
                <Route
                  exact
                  path="/register"
                  element={
                    <PublicRoute redirectTo="/contacts" restricted>
                      <RegisterView />
                    </PublicRoute>
                  }
                ></Route>

                <Route
                  exact
                  path="/login"
                  element={
                    <PublicRoute redirectTo="/contacts" restricted>
                      <LoginView />
                    </PublicRoute>
                  }
                ></Route>

                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute redirectTo="/login">
                      <ContactsView />
                    </PrivateRoute>
                  }
                ></Route>
              </Routes>
            </Suspense>
          </Container>
        </>
      )}
    </>
  );
}
