import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Chat from './Chat.jsx'; 
import Login from './Login.jsx'; // Exemple pour une autre page, comme le Dashboard

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate to="/login" />} />
       
        <Route path="/login" element={<Login />} />
       
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
