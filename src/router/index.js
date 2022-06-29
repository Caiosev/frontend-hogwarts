import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import Login from '../pages/login';
import Page404 from '../pages/Page404';
import Dashboard from '../pages/Dashboard';
import CadastroAluno from '../pages/CadastroAluno';
import User from '../pages/User';
import Provas from '../pages/Provas';

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
                path="/aluno/:id"
                element={
                    <PrivateRoute>
                        <CadastroAluno />
                    </PrivateRoute>
                }
            />
            <Route
                path="/aluno/"
                element={
                    <PrivateRoute>
                        <CadastroAluno />
                    </PrivateRoute>
                }
            />
            <Route
                path="/user/"
                element={
                    <PrivateRoute>
                        <User />
                    </PrivateRoute>
                }
            />
            <Route
                path="/provas/"
                element={
                    <PrivateRoute>
                        <Provas />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
