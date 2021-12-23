import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import World from '../pages/World';
import Game from '../pages/Game';
import Store from '../pages/Store';
import TestComponent from '../pages/TestComponent';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/world" element={<World />} />
        <Route path="/game" element={<Game />} />
        <Route path="/store" element={<Store />} />
        <Route path="/test-component" element={<TestComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
