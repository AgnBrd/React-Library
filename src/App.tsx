import React from 'react';
import './App.css';
import LoginForm from './login-form/LoginForm';
import HomePage from './librarian-home-page/LibrarianHomePage';
import DisplayBooksForm from './librarian/librarian-books/LibrarianBooks';
import Users from './librarian/users/Users';
import Loans from './librarian/librarian-loans/LibrarianLoans';
import ReaderHomePage from './reader-librarian-home-page/ReaderHomePage';
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
        <Route path="/readerHome" element={<ReaderHomePage />} />
        <Route path="/bookList" element={<DisplayBooksForm />} />
        <Route path="/loanList" element={<Loans />} />
        <Route path="/userList" element={<Users />} />
        <Route path="/readerLoanList" element={<Users />} />
      </Routes>
      {/*</ApiProvider>*/}
    </BrowserRouter>
  );
}

export default App;
