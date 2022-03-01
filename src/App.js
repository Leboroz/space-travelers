import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import MissionsPage from './pages/MissionsPage';
import RocketsPage from './pages/RocketsPage';

function App() {
  return (
    <>
      <header>
        <MainHeader />
      </header>

      <main className="container my-3">
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
