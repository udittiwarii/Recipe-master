import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // ✅ Changed here
import { ToastContainer } from 'react-toastify';
import Recipescontext from './context/Recipescontext.jsx';

createRoot(document.getElementById('root')).render(
  <Recipescontext>
    <HashRouter> {/* ✅ Changed here */}
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </HashRouter>
  </Recipescontext>
);
