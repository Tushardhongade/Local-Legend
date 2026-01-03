// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import PostsPage from './pages/PostsPage';
import ProfilePage from './pages/ProfilePage';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;