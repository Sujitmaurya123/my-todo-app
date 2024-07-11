

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  // Create store data of taskinput data in redux store and using to any components in App 
  <Provider store={store}>
    <App />
  </Provider>,
)
