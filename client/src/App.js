import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Home from './components/Home';
import styles from './styles';
import AppBar from './components/AppBar';
import AuthForm from './components/AuthForm';

const {  Footer } = Layout;

const App = () => {
    return (
        <BrowserRouter>
            <Layout style={styles.layout}>
                <AppBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/authform" element={<AuthForm />}/>
                </Routes>
                <Footer  style={styles.footer}>2021 Instaverse</Footer>
            </Layout>
        </BrowserRouter>
    )
}

export default App;