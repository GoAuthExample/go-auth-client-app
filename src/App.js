import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/App.css';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { AuthProvider } from './context/AuthProvider';
import { ProtectedRoute } from "./pages/ProtectedRoute";

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>


  );
}

export default App;
