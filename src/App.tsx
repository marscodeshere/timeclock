import { useAuthenticator } from '@aws-amplify/ui-react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css';
import Home from './Home.tsx';

export default function App() {

  const {user, signOut} = useAuthenticator();
  return (
    <main>
        <Router>
          <Nav variant="tabs" className="bg-body-tertiary justify-content-center">
            <Nav.Item>
              <NavLink to="/" className="nav-link">AIS</NavLink>
            </Nav.Item>
            <Nav.Item>
              <Button onClick={signOut} id="signOutButton">Sign out</Button>
            </Nav.Item>

          </Nav>
          <Navbar.Text className="justify-content-end">Signed In as: {user?.signInDetails?.loginId?.split("@")[0]}</Navbar.Text>
          
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

        </Router>

      {/* Footer */}
      <footer className="mt-4 text-muted">
        <p>&copy; {new Date().getFullYear()} AIS. All rights reserved.</p>
      </footer>
    </main>
  );
}