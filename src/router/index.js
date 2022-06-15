import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from '../pages/Home';
import Page404 from '../pages/Page404';

function PrivateRoute({ children }) {
    const isLoggedIn = true;
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
            <Route
                path="/quit"
                element={
                    <PrivateRoute>
                        <Page404 />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
