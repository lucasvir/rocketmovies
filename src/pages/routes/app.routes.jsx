import { Routes, Route } from 'react-router-dom';

import { Home } from '../Home';
import { Profile } from '../Profile';
import { CreateMovie } from '../CreateMovie';
import { MoviePreview } from '../MoviePreview';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/preview/" element={<MoviePreview />} />
    </Routes>
  );
}
