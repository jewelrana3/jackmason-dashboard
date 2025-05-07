import { Layout } from 'antd';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import PageTitle from '../shared/PageTitle';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const { Header } = Layout;

const path = [
    { path: '/', name: 'Analytics' },
    { path: '/user', name: 'User' },
    { path: '/venue-list', name: 'Venue List' },
    { path: '/category', name: 'Category' },
    { path: '/subscriber', name: 'Subscriber' },
    { path: '/faq', name: 'FAQ' },

    { path: '/terms-condition', name: 'Terms Condition' },
    { path: '/about-us', name: 'About Us' },
    { path: '/privacy-policy', name: 'Privacy Policy' },
    { path: '/notifications', name: 'Notifications' },
    { path: '/profile', name: 'Profile' },
    { path: '/edit-profile', name: 'Edit Profile' },
    { path: '/change-password', name: 'Change Password' },
];

const HeaderDashboard = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const currentPage = path.find((item) => item.path === currentPath);
    return (
        <Header
            className="px-8 my-2 rounded-lg mb-8"
            style={{
                width: '100%',
                overflow: 'hidden',
                background: '#212526',
            }}
        >
            <div className="flex items-center justify-between ">
                <div>
                    {currentPage ? (
                        currentPage.path === '/customer-details' ||
                        currentPage.path === '/post-details' ||
                        currentPage.path === '/all-details' ||
                        currentPage.path == '/transection-details' ? (
                            <div className="flex items-center gap-2">
                                <HiArrowSmallLeft className="" size={25} /> <PageTitle>{currentPage.name}</PageTitle>
                            </div>
                        ) : (
                            <PageTitle className="text-[#B8B8B8]">{currentPage.name}</PageTitle>
                        )
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex items-center justify-end gap-5 h-full ">
                    <div>
                        {/*notification icons */}
                        <Link to={'/notifications'}>
                            <div className="size-10 rounded-full flex items-center justify-center bg-[#F2F2F2]">
                                <button className="py-4 px-1 relative border-2 border-transparent rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out">
                                    <span className="absolute inset-0 -top-4  -mr-4">
                                        <div className="inline-flex items-center px-1.5 py-0.5  text-xs font-semibold leading-4 rounded-full bg-[#EEC10B]  text-black">
                                            6
                                        </div>
                                    </span>

                                    <IoMdNotificationsOutline size={24} />
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div>
                        {/* profile */}

                        <Link
                            to={'/profile'}
                            style={{
                                height: '42px',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                margin: '10px',
                            }}
                        >
                            <img
                                src={'/user.svg'}
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                }}
                                alt=""
                            />
                            <h2
                                className="text-[#B8B8B8]"
                                style={{
                                    fontSize: '16px',
                                }}
                            >
                                Admin Humphrey
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </Header>
    );
};

export default HeaderDashboard;
