import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MessageProviderWrapper } from './Context/userMessage.context';
import { AuthProviderWrapper } from './Context/auth.context';
import { ModalWrapper } from './Context/modal.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <AuthProviderWrapper>
      <MessageProviderWrapper>
        <ModalWrapper>
          <App />
        </ModalWrapper>
      </MessageProviderWrapper>
    </AuthProviderWrapper>
  </Router>
  // </React.StrictMode>
);


