//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
//import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
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
import AboutPage from './pages/AboutPage';
import AuthorsListPage from './pages/AuthorsListPage';
import AuthorPage from './pages/AuthorPage';
import RulesPage from './pages/RulesPage';
import LegalPage from './pages/LegalPage';
import BranchesListPage from './pages/BranchesListPage';
import BranchPage from './pages/BranchPage';
import WorksListPage from './pages/WorksListPage';
import BooksListPage from './pages/BooksListPage';
import VideosListPage from './pages/VideosListPage';
import AudiosListPage from './pages/AudiosListPage';
import BookPage from './pages/BookPage';
import VideoPage from './pages/VideoPage';
import AudioPage from './pages/AudioPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import DeweyListPage from './pages/DeweyListPage';
import DeweyPage from './pages/DeweyPage';
import ANSCRPage from './pages/ANSCRPage';
import ANSCRListPage from './pages/ANSCRListPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/legal" element={<LegalPage />} /> 
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* Branches of the library system */}
        <Route path="/branches">
          <Route path="" element={<BranchesListPage />} />
          <Route path=":id" element={<BranchPage />} />
        </Route>

        {/* Authors featured in the library system */}
        <Route path="/authors">
          <Route path="" element={<AuthorsListPage />} />
          <Route path=":id" element={<AuthorPage />} />
        </Route>

        {/* Works present in the library system */}
        <Route path="/works">
          <Route path="" element={<WorksListPage />} />

          <Route path="books">
            <Route path="" element={<BooksListPage />} />
            <Route path=":id" element={<BookPage />} />

            <Route path="dewey">
              <Route path="" element={<DeweyListPage />} />
              <Route path=":id" element={<DeweyPage />} />
            </Route>
          </Route>
          
          <Route path="movies">
            <Route path="" element={<VideosListPage />} />
            <Route path=":id" element={<VideoPage />} />
          </Route>
          
          <Route path="audios">
            <Route path="" element={<AudiosListPage />} />
            <Route path=":id" element={<AudioPage />} />

            <Route path="anscr">
              <Route path="" element={<ANSCRListPage />} />
              <Route path=":id" element={<ANSCRPage />} />
            </Route>
          </Route>
        </Route>

        {/* Items present in the library system */}
        <Route path="/items">
          <Route path="books/:id" element={<NoPageYet />} />
          <Route path="audios/:id" element={<NoPageYet />} />
          <Route path="videos/:id" element={<NoPageYet />} />
        </Route>

        {/* Administration */}
        <Route path="/admin">
          <Route path="" element={<NoPageYet />} />
          <Route path="profile" element={<NoPageYet />} />
          <Route path="inventory">
            <Route path="" element={<NoPageYet />} />
            <Route path="works" element={<NoPageYet />} />
            <Route path="authors" element={<NoPageYet />} />
            <Route path="others" element={<NoPageYet />} />
          </Route>

          <Route path="readers">

          </Route>
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
