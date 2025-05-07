import { IoCloseSharp } from 'react-icons/io5';

interface UserDetailProps {
    isOpen: boolean;
    onClose: () => void;
}

const userData = [
    {
        id: 1,
        userName: 'Omar Yusuf Hassan',
        email: 'omar@gmail.com',
        contactNumber: '+234 802 345 6789',
        eventType: 'Health & Wellness',
        joiningDate: '05 Jun, 2025',
    },
];

const UserDetail = ({ isOpen, onClose }: UserDetailProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#212526] p-6 rounded-xl text-[#B8B8B8E5] w-[30%]">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">User List Details</h2>
                    <button className="text-xl font-bold text-gray-400 hover:text-white" onClick={onClose}>
                        <IoCloseSharp />
                    </button>
                </div>
                <div className="mt-4">
                    {userData.map((user) => (
                        <div key={user.id}>
                            <div className="grid grid-cols-2 py-2">
                                <span className="font-semibold capitalize">User Name : </span>
                                <span>{user.userName}</span>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <span className="font-semibold capitalize">Email : </span>
                                <span>{user.email}</span>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <span className="font-semibold capitalize">Contact Number : </span>
                                <span>{user.contactNumber}</span>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <span className="font-semibold capitalize">Event Type : </span>
                                <span>{user.eventType}</span>
                            </div>
                            <div className="grid grid-cols-2 py-2">
                                <span className="font-semibold capitalize">Joining Date : </span>
                                <span>{user.joiningDate}</span>
                            </div>
                            {/* You can display other fields or adjust based on your data */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
