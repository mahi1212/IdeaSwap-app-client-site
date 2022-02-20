import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Courses from './Pages/Courses/Courses/Courses';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import MyFeedback from './Pages/MyFeedback/MyFeedback';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/SignUp/PrivateRoute/PrivateRoute';
import SingleCourse from './Pages/Courses/SingleCourse/SingleCourse';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageReview from './Pages/Dashboard/ManageReview/ManageReview';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import ManageUser from './Pages/Dashboard/ManageUser/ManageUser';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} >
              <Route path='/dashboard/addProduct' element={<AddProduct />} />
              <Route path='/dashboard/manageReview' element={<ManageReview />} />
              <Route path='/dashboard/manageUser' element={<ManageUser />} />
            </Route>

            <Route path='courses' element={<Courses />} />
            <Route path='courses/:courseId' element={<PrivateRoute> <SingleCourse /></PrivateRoute>} />
            <Route path='myFeedback' element={<MyFeedback />} />
            <Route path='contact' element={<Contact />} />
            <Route path='signUp' element={<SignUp />} />
            <Route path='signIn' element={<SignIn />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
