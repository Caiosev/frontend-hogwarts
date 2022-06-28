import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import Login from '../pages/login';
import Page404 from '../pages/Page404';
import Dashboard from '../pages/Dashboard';
import CadastroAluno from '../pages/CadastroAluno';

function PrivateRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return isLoggedIn ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="/cadastroAluno/:id"
                element={
                    <PrivateRoute>
                        <CadastroAluno />
                    </PrivateRoute>
                }
            />
            <Route
                path="/cadastroAluno/"
                element={
                    <PrivateRoute>
                        <CadastroAluno />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
