import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import initState from './redux/rockets/rocketsAPI';
import MainHeader from './components/MainHeader';
import MissionsPage from './pages/MissionsPage';
import RocketsPage from './pages/RocketsPage';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rockets.rocketsData);

  useEffect(() => {
    dispatch(initState());
  }, [dispatch]);

  return (
    <>
      <header>
        <MainHeader />
      </header>

      <main className="container my-3">
        <Routes>
          <Route path="/" element={<RocketsPage state={state} />} />
          <Route path="/missions" element={<MissionsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
