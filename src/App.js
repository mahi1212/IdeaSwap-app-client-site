import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Courses from './Pages/Courses/Courses/Courses';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Header from './Pages/Shared/Header/Header';
import MyFeedback from './Pages/MyFeedback/MyFeedback';
import Footer from './Pages/Shared/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="home" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path='myFeedback' element={<MyFeedback />} />
            <Route path='contact' element={<Contact />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
