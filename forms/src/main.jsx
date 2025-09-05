import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './form.jsx';
import './form.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
