import { Route, Routes } from 'react-router';
import './App.css';
import HomeRoute from './routes/Home.route';
import MovieListRoute from './routes/MovieList.route';
import MovieFormRoute from './routes/MovieForm.route';
import Header from './ui/Header/Header';
import DemoParamRoute from './routes/DemoParam.route';

function App() {

  return (
    <>
      <Header />
      <main>
        {/* ↓ Définition du routing avec React-router */}
        <Routes>
          <Route index element={<HomeRoute />} />
          <Route path='movies' element={<MovieListRoute />} />
          <Route path='movies/add' element={<MovieFormRoute />} />
          <Route path='demo/:id' element={<DemoParamRoute />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
