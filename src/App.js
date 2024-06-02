import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { CookiesProvider } from 'react-cookie';
import Manage from './components/Manage';
import ContextDemo from './contextDemo/ContextDemo';
import ReducerDemo from './reducerDemo/ReducerDemo';
import LoginCaptcha from './customHooks/LoginCaptcha';

function App() {
  return (
    < >
   <CookiesProvider>
   <Index/>
   {/* <ContextDemo/> */}
   {/* <LoginCaptcha/> */}
   {/* <ReducerDemo/> */}
   </CookiesProvider>
    </>
  );
}

export default App;
