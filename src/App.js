import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { CookiesProvider } from 'react-cookie';
import Manage from './components/Manage';

function App() {
  return (
    < >
   <CookiesProvider>
   <Index/>
   
   </CookiesProvider>
    </>
  );
}

export default App;
