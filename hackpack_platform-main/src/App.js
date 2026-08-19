import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import VideoBackground from './components/layout/VideoBackground';
import Home from './pages/Home';
import About from './pages/About';
import Hackathons from './pages/Hackathons';
import TeamFormation from './pages/TeamFormation';
import Profile from './pages/Profile';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <VideoBackground />
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/team" element={<TeamFormation />} />
            </Route>
        </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
