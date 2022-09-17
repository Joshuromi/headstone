import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import routes from './utils/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={<route.component />}
          ></Route>
        ))}
        <Route exact path="/" element={<Navigate to="/sign_in" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
