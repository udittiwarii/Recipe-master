import { useLocation, matchPath } from "react-router-dom";
import Navbar from './Components.jsx/Navbar';
import Mainroutes from './routing/Mainroutes';

const App = () => {
  const location = useLocation();

  // List of routes where Navbar should be hidden
  const hideNavbarRoutes = [
    "/recipes/detail/:id",
    "/recipes/update/:id"
  ];

  // Check if current path matches any hide routes exactly
  const shouldHideNavbar = hideNavbarRoutes.some(route =>
    matchPath({ path: route, end: true }, location.pathname) !== null
  );

  return (
    <div className='w-screen min-h-screen'>
      {!shouldHideNavbar && <Navbar />}
      <Mainroutes />
    </div>
  );
};

export default App;
