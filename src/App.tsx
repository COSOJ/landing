import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// @ts-ignore
import Home from './home';

const App = () => (
  <BrowserRouter basename="/">
      <Routes>
        <Route path="/landing" element={<Home />} />
        <Route
          path="*"
          element={<Navigate to="/landing" replace />}
        />
      </Routes>
  </BrowserRouter >
);

// eslint-disable-next-line import/no-default-export
export default App;
