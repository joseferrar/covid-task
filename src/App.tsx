import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Country from './pages/Country';
import { RootState } from './features';
import AppLayout from './components/Layout/AppLayout';
import CountryDetails from './pages/CountryDetails';
import Spinner from './components/Spinner';

function App() {
  const { loading } = useSelector((state: RootState) => state.loading);

  return (
    <>
      {loading && <Spinner />}
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Country />} />
          <Route path="/:id" element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
