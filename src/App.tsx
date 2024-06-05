import React from 'react';
import './App.css';
import LoginForm from './login-form/LoginForm';
import HomePage from './home-page/HomePage';
import DisplayBooksForm from './display-books-form/DisplayBooksForm';
import Users from './users-form/Users';
import Loans from './loans-form/LoansForm';
import { Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
// import ApiProvider from './api/ApiProvider';

function App() {
  return (
    <BrowserRouter>
      {/*<ApiProvider>*/}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/bookList" element={<DisplayBooksForm />} />
        <Route path="/loanList" element={<Loans />} />
        <Route path="/userList" element={<Users />} />
      </Routes>
      {/*</ApiProvider>*/}
    </BrowserRouter>
  );
}

export default App;
