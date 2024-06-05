import React from 'react';
import './App.css';
import LoginForm from './login-form/LoginForm';
import LibrarianHomePage from './librarian/librarian-home-page/LibrarianHomePage';
import LibrarianBooks from './librarian/librarian-books/LibrarianBooks';
import Users from './librarian/users/Users';
import LibrarianLoans from './librarian/librarian-loans/LibrarianLoans';
import ReaderLoans from './reader/reader-loans/ReaderLoans';
import ReaderBooks from './reader/reader-books/ReaderBooks';
import ReaderHomePage from './reader/reader-home-page/ReaderHomePage';
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
        <Route path="/librarianHome" element={<LibrarianHomePage />} />
        <Route path="/readerHome" element={<ReaderHomePage />} />
        <Route path="/librarianBook" element={<LibrarianBooks />} />
        <Route path="/librarianLoan" element={<LibrarianLoans />} />
        <Route path="/users" element={<Users />} />
        <Route path="/readerLoan" element={<ReaderLoans />} />
        <Route path="/readerBook" element={<ReaderBooks />} />
      </Routes>
      {/*</ApiProvider>*/}
    </BrowserRouter>
  );
}

export default App;
