import React from 'react';
import './App.css';
import LoginForm from './login-form/LoginForm';
import HomePage from './home-page/HomePage';
import DisplayBooksForm from './display-books-form/DisplayBooksForm';
import { Route, Navigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />}>
        <Route
          path="2"
          element={
            <>
              <div
                style={{
                  height: '300px',
                  width: '100%',
                  backgroundColor: 'blue',
                }}
              />
            </>
          }
        />
      </Route>
      <Route path="/bookList" element={<DisplayBooksForm />} />
    </Routes>
  );
}

export default App;
