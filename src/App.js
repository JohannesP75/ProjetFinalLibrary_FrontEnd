import logo from './logo.svg';
//import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Header from './pages/Header';
import NoPage from './pages/NoPage';
import NoPageYet from './pages/NoPageYet';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Branches of the library system */}
        <Route path="/branches">
          <Route path="" element={<NoPageYet />} />
          <Route path=":id" element={<NoPageYet />} />
        </Route>

        {/* Authors featured in the library system */}
        <Route path="/authors">
          <Route path="" element={<NoPageYet />} />
          <Route path=":id" element={<NoPageYet />} />
        </Route>

        {/* Works present in the library system */}
        <Route path="/works">
          <Route path="" element={<NoPageYet />} />
          <Route path=":id" element={<NoPageYet />} />
        </Route>

        {/* Items present in the library system */}
        <Route path="/items">
          <Route path="" element={<NoPageYet />} />
          <Route path=":id" element={<NoPageYet />} />
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
