import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import RequireAuth from './components/UI/RequireAuth';
import Login from "./components/Login";
import Ccontasena from "./components/Ccontrasena";
const Private = ({ children }) => <RequireAuth redirectTo="/login">{children}</RequireAuth>

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className=" h-screen w-screen">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/ccontrasena" element={<Ccontasena />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;