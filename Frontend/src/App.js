import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import RequireAuth from './components/UI/RequireAuth';
import Login from "./components/Login";
import Ccontasena from "./components/Ccontrasena";
import NCategoria from "./components/NuevaCategoria";
import NUsuario from "./components/AgregarUsuario";
const Private = ({ children }) => <RequireAuth redirectTo="/login">{children}</RequireAuth>

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className=" h-screen w-screen">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/ccontrasena" element={<Ccontasena />} />
            <Route path="/add_categories" element={<NCategoria/>}/>
            <Route path="/add_user" element={<NUsuario/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;