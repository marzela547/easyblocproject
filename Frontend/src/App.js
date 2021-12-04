import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import RequireAuth from './components/UI/RequireAuth';
import Login from "./components/Login";
import Ccontasena from "./components/Ccontrasena";
import Nota from "./components/Notas";
const Private = ({ children }) => <RequireAuth redirectTo="/login">{children}</RequireAuth>


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-red-400 ">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/ccontrasena" element={<Ccontasena />} />
            <Route path="/Nota" element={<Nota />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;