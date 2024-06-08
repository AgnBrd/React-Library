import React from 'react';
import LoginForm from './login-form/LoginForm';
import LibrarianHomePage from './librarian/librarian-home-page/LibrarianHomePage';
import LibrarianBooks from './librarian/librarian-books/LibrarianBooks';
import Users from './librarian/users/Users';
import LibrarianLoans from './librarian/librarian-loans/LibrarianLoans';
import ReaderLoans from './reader/reader-loans/ReaderLoans';
import ReaderBooks from './reader/reader-books/ReaderBooks';
import ReaderHomePage from './reader/reader-home-page/ReaderHomePage';
import LibrarianEditBooks from './librarian/librarian-edit-books/LibrarianEditBooks';
import { Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import AddBook from './librarian/librarian-edit-books/AddBook';
import DeleteBook from './librarian/librarian-edit-books/DeleteBook';
import UpdateBook from './librarian/librarian-edit-books/UpdateBook';
import ApiProvider from './api/ApiProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ApiProvider>
          <Routes>
            <Route path="*" element={<h1>404 page don't exists</h1>} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/librarianHome" element={<LibrarianHomePage />} />
            <Route path="/readerHome" element={<ReaderHomePage />} />
            <Route path="/librarianBook" element={<LibrarianBooks />} />
            <Route path="/librarianLoan" element={<LibrarianLoans />} />
            <Route path="/users" element={<Users />} />
            <Route path="/readerLoan" element={<ReaderLoans />} />
            <Route path="/readerBook" element={<ReaderBooks />} />
            <Route path="/librarianEditBooks" element={<LibrarianEditBooks />}>
              <Route path="add" element={<AddBook />} />
              <Route path="update" element={<UpdateBook />} />
              <Route path="delete" element={<DeleteBook />} />
            </Route>
          </Routes>
        </ApiProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
