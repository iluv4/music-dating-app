import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Welcome from './pages/Welcome';
import Terms from './pages/Terms';
import Profile from './pages/Profile';
import GenreSelect from './pages/GenreSelect';
import MusicSelect from './pages/MusicSelect';
import Home from './pages/Home';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import Notifications from './pages/Notifications';
import MyPage from './pages/MyPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/profile/:step" element={<Profile />} />
          <Route path="/genre-select" element={<GenreSelect />} />
          <Route path="/music-select" element={<MusicSelect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<ChatList />} />
          <Route path="/chat/:id" element={<ChatRoom />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
