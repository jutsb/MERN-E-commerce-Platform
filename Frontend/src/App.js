import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Route path="/" component={HomePage} exact />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart/:id?" component={CartPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
            </main>
            <Footer />
        </Router>
    );
};

export default App;
