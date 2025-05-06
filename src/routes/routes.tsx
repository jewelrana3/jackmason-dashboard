import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/authentication/Login';
import ErrorPage from '../pages/error/ErrorPage';
import Notification from '../pages/dashboard/Notification';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';
import Dashboard from '../pages/dashboard/dasboard/Dashboard';
import PrivacyPolicy from '../pages/dashboard/PrivacyPolicy';
import EditProfile from '../pages/dashboard/profile/EditProfile';
import ChangePassword from '../pages/dashboard/profile/ChangePassword';
import Profile from '../pages/dashboard/profile/Profile';
import TermsCondition from '../pages/dashboard/TermsCondition';
import PostList from '../pages/dashboard/category/Category';
import BuyerRegistration from '../pages/dashboard/buyerRegistration/BuyerRegistration';
import AboutUS from '../pages/dashboard/AboutUs';
import User from '../pages/dashboard/user/User';
import VenueList from '../pages/dashboard/venueList/VenueList';
import Subscriber from '../pages/dashboard/subscriber/Subscriber';
import FAQ from '../pages/dashboard/FAQ';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'user', element: <User /> },
            { path: 'venue-list', element: <VenueList /> },
            { path: 'category', element: <PostList /> },
            // { path: 'post-details', element: <PostDetails /> },
            { path: 'buyer-registration', element: <BuyerRegistration /> },
            // { path: 'all-details', element: <AllDetails /> },
            { path: 'subscriber', element: <Subscriber /> },
            { path: 'faq', element: <FAQ /> },

            { path: 'about-us', element: <AboutUS /> },
            { path: 'privacy-policy', element: <PrivacyPolicy /> },
            { path: 'terms-condition', element: <TermsCondition /> },
            { path: 'notifications', element: <Notification /> },
            { path: 'profile', element: <Profile /> },
            { path: 'edit-profile', element: <EditProfile /> },
            { path: 'change-password', element: <ChangePassword /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;
