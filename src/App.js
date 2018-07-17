import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import logo from './bloc_jams_logo.png';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <img id="logo-float" src={logo} alt="Logo" />
          <nav>
            <ul>
              <li><Link style={{ textDecoration: 'none', color:'white' }} to='/'>Landing</Link></li>
              <li><Link style={{ textDecoration: 'none', color:'white' }} to='/library'>Library</Link></li>
            </ul>
          </nav>
          <h1 className="h1-title">Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;