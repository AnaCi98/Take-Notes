import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import CreateNote from './components/Dashboard/CreateNote';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './PrivateRoutes';
import EditNotes from './components/Dashboard/EditNote';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/note" element={<PrivateRoute><CreateNote /></PrivateRoute>} />
          <Route path="/editnote:id" element={<PrivateRoute><EditNotes /></PrivateRoute>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;