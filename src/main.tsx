import ReactDOM from 'react-dom/client';
import App from './App';
// import { Carrito } from './Carrito';
import StateProvider from './context/StateProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StateProvider>
        <App />
        {/* <Carrito /> */}
    </StateProvider>
);
