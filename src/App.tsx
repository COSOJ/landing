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
  <BrowserRouter basename="/landing">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
  </BrowserRouter >
);

// eslint-disable-next-line import/no-default-export
export default App;
