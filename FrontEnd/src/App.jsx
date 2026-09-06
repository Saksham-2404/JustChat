import React from 'react'
import { Route, Routes } from 'react-router'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { useAuthStore } from './store/useAuthStore'


const bgStyle = `
  @keyframes aurora {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .aurora-bg {
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(
      -45deg,
      #0d0d1a,
      #0d1f3c,
      #0a2a2a,
      #1a0d2e,
      #0d1f3c,
      #0d2a1a
    );
    background-size: 400% 400%;
    animation: aurora 12s ease infinite;
    position: relative;
  }
  .aurora-bg::before {
    content: '';
    position: fixed;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 20% 30%, rgba(120, 80, 255, 0.15) 0%, transparent 60%),
      radial-gradient(ellipse 50% 40% at 80% 70%, rgba(0, 200, 180, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 60% 20%, rgba(180, 60, 255, 0.1) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }
  .aurora-bg > * {
    position: relative;
    z-index: 1;
  }
`


function App() {
  const {authUser,login,isLoggedIn} = useAuthStore();
  console.log("auth user:", authUser);
  console.log("isLogged in:", isLoggedIn);
  return (
    <>
          <style>{bgStyle}</style>
    <div className="aurora-bg">

    <button onClick={login}>
      Login
    </button>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

      </Routes>
    </div>
      </>
  )
}

export default App