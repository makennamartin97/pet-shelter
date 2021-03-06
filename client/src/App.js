import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Router} from '@reach/router';
import Dashboard from './components/Dashboard';
import PetForm from './components/PetForm';
import Edit from './components/Edit';
import Pet from './components/Pet';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <Link className="navbar-brand text-success m-2 lead" to="/">petshelter.com</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link text-info lead" to="/">Our Buddies</Link>
            <Link className="nav-item nav-link text-info lead" to="/pets/new">Post a Pet</Link>
          </div>
        </div>
      </nav>
      <Router>
        <Dashboard path="/"/>
        <PetForm path="/pets/new"/>
        <Edit path="/pets/:_id/edit"/>
        <Pet path="/pets/:_id"/>
      </Router>
      
    </div>
  );
}

export default App;
