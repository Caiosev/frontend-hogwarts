import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from './styles/GlobalStyles';
import store, { persistor } from './store';
import Header from './components/Header';
import Routes from './router';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Header />
                    <Routes />
                    <ToastContainer
                        autoClose={3000}
                        className="toast-container"
                    />
                    <GlobalStyle />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
