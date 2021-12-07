import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import RequireAuth from './components/UI/RequireAuth';
import Login from "./components/Login";
import Ccontasena from "./components/Ccontrasena";
import NCategoria from "./components/NuevaCategoria";
import NUsuario from "./components/SignIn";
import Perfil from "./components/Perfil";
import Rcontasena from "./components/Rcontrasena";
import Remail from "./components/Remail";
import Rcodigo from "./components/Rcodigo";
import Nota from "./components/Notas";
import Categoria from "./components/Categorias";

import AddNota from "./components/AddNota";
import UpdNota from "./components/updNota";
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
            <Route path="/signin" element={<NUsuario/>}/>
            <Route path="/profile" element={<Perfil/>}/>
            <Route path="/rcontrasena" element={<Rcontasena />} />
            <Route path="/remail" element={<Remail />} />
            <Route path="/rcodigo" element={<Rcodigo />} />
            <Route path="/notes" element={<Nota />} />
            <Route path="/categories" element={<Categoria />} />
		      	<Route path="/addnote" element={<AddNota />} />
            <Route path="/updnote" element={<UpdNota />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;