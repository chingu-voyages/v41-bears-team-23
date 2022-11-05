 import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  //const { user } = useAuthContext()
  const user = false;
  return (

    <div className="w-full h-screen flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user?<Home/>:<Navigate to="./login"/>}/>
          <Route path="/login" element={!user?<Login />:<Navigate to="/"/>} />
          <Route path="/register" element={!user?<Register />:<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
