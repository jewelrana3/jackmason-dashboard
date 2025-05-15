import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiFileOn, CiSettings, CiUser } from 'react-icons/ci';
import logo from '../../../public/logo.svg';
import { LuFileSliders } from 'react-icons/lu';
import { PiChartScatterLight, PiNoteDuotone } from 'react-icons/pi';
import { TbEdit, TbNotes } from 'react-icons/tb';
import { MdKeyboardArrowUp, MdLogout, MdOutlineKeyboardArrowDown, MdTransform } from 'react-icons/md';
import { useState } from 'react';
import { BiCategory } from 'react-icons/bi';
import { FaQuestion } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { RiExchange2Fill } from 'react-icons/ri';

const menuItems = [
    { label: 'Dashboard', path: '/', icon: <BiCategory size={22} /> }, // Using React Icon here
    { label: 'User', path: '/user', icon: <CiUser size={22} /> },
    { label: 'Venue List', path: '/venue-list', icon: <CiFileOn size={22} /> },
    { label: 'Category', path: '/category', icon: <PiChartScatterLight size={22} /> },
    { label: 'Subscriber', path: '/subscriber', icon: <MdTransform size={22} /> },
    { label: 'FAQ', path: '/faq', icon: <FaQuestion size={20} /> },
];

const settings = [
    {
        label: <span className="text-[18px]">Setting</span>,
        icon: <CiSettings size={24} />,
        path: '',
        children: [
            { label: 'Profile', path: '/profile', icon: <CgProfile size={22} /> },
            { label: 'Edit Profle', path: '/edit-profile', icon: <TbEdit size={22} /> },
            { label: 'Change Password', path: '/change-password', icon: <RiExchange2Fill size={22} /> },
            { label: 'About Us', path: '/about-us', icon: <LuFileSliders size={22} /> },
            { label: 'Privacy & Policy', path: '/privacy-policy', icon: <PiNoteDuotone size={22} /> },
            { label: 'Terms & Condition', path: '/terms-condition', icon: <TbNotes size={22} /> },
        ],
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    const handleLogout = () => {
        navigate('/login');
    };
    return (
        <div className="h-screen" style={{ backgroundColor: '#212526', fontFamily: 'Nunito' }}>
            <div className="flex items-center justify-center p-3 cursor-pointer">
                <img src={logo} alt="Logo" className="w-32" />
            </div>

            <div style={{ backgroundColor: '#212526', color: '#929292' }} className="mt-10">
                {menuItems.map((item) => {
                    return (
                        <div
                            key={item.path}
                            className={
                                pathname === item.path
                                    ? 'bg-[#FFB953] rounded-r-lg w-[2%] text-nowrap transition-transform'
                                    : ''
                            }
                        >
                            <Link className={`flex items-center gap-4  p-6 py-2`} to={item.path}>
                                <span>{item.icon}</span>
                                {item.label}
                            </Link>
                        </div>
                    );
                })}

                <div onClick={() => setIsSettingOpen(!isSettingOpen)} className="cursor-pointer">
                    <div className="flex items-center ml-6 my-2 ">
                        <div className="flex gap-3">
                            <span>
                                <CiSettings size={26} />
                            </span>
                            <span> Setting</span>
                        </div>
                        <div className="ml-28">
                            {isSettingOpen ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                    </div>
                </div>

                {/* dublicate */}
                <div className={isSettingOpen ? 'block' : 'hidden'}>
                    {settings.map((setting) => (
                        <div key={setting.path}>
                            {setting.children.map((child) => (
                                <div
                                    key={`${setting.path}-${child.path}`}
                                    className={
                                        pathname === child.path ? 'bg-[#FFB953] rounded-r-full  w-[3%] text-nowrap' : ''
                                    }
                                >
                                    <Link to={child.path} className="flex items-center gap-4 p-6 py-2">
                                        <span>{child.icon}</span>
                                        {child.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div
                    className=" flex items-center mt-20 gap-3 text-[#929292]  text-[18px]  py-2 rounded-xl cursor-pointer ml-6"
                    onClick={handleLogout}
                >
                    <span>
                        <MdLogout className="font-bold" size={23} />
                    </span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
