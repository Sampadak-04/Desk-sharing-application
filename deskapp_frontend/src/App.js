import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Signup from './Components/Signup';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/section1" element={<Section1/>}></Route>
        <Route path="/section2" element={<Section2/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
