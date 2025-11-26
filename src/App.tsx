import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Chat from './components/Chat/Chat';
import Home from './Home';
import Documents from './Documents';
import SideMenu from './components/SideMenu/SideMenu';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <aside className="sidebar">
          <SideMenu />
        </aside>
        <main className="page">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </main>
      </div>
      <Chat />
    </div>
  );
}
