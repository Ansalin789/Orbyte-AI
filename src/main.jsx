// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import './styles/vendors/menu.css';
// import './styles/style.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import 'swiper/css';
import 'swiper/css/navigation';
import './styles/vendors/menu.css';
import './styles/style.css';

// Redirection logic to always redirect to 'www.orbyte.ai'
if (window.location.hostname === 'orbyte.ai') {
  window.location.replace(`https://www.orbyte.ai${window.location.pathname}${window.location.search}`);
} else {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
