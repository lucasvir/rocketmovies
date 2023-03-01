import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}
