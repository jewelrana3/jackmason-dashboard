import Chart from './Chart';

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

const VenueDetail = () => {
    return (
        <div className=" p-6 rounded-xl text-[#B8B8B8E5] ">
            <div className="flex justify-between items-center -mt-2 ">
                <h2 className="text-xl font-semibold">Venue Booking Details</h2>
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

            <Chart />
        </div>
    );
};

export default VenueDetail;
