import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import MainContent from './components/MainContent';
import Sample from './components/Sample';

function App() {
  return (
    <div className="App">

     {/* <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='sample'>Sample</Link></li>
    </ul> */}

    <BrowserRouter>
    {/* <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/home'>About</Link></li>
    </ul> */}
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/home">Table Data</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <Routes>
      <Route path='/' element={<MainContent/>}/>
      <Route path='/home' element={<Sample/>}/>
    </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
