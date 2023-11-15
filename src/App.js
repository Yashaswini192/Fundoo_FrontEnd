import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/singUp/SignUp';
import MiniDrawer from './pages/dashBoard/MiniDrawer';
import Header from './pages/dashBoard/Header';
import Router from './routing/Router';

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
        {/* <SignUp/>  */}
       {/* <MiniDrawer/>  */}
        
        <Router/>
    </div>
  );
}

export default App;
