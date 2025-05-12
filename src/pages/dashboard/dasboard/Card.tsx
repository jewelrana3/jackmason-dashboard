import user from '../../../../public/card/user.svg';
import service from '../../../../public/card/services.svg';
import earn from '../../../../public/card/earning.svg';
const data = [
    {
        icon: <img src={user} alt="total" />,
        title: 'Total User',
        date: '13 NOV, 2024',
        count: '80k',
        total: '20550',
        daliy: '29',
    },
    {
        icon: <img src={service} alt="total" />,
        title: 'Total Bookings',
        date: '13 NOV, 2024',
        count: '820',
        total: 'S109558',
        daliy: '1492tn',
    },
    {
        icon: <img src={earn} alt="total" />,
        title: 'Total Earning',
        date: '13 NOV, 2024',
        count: '$8200',
        total: 'SYP109558',
        daliy: '1392tn',
    },
];

const Card = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {data.map((item, index) => (
                <div key={index} className="rounded-2xl w-full gap-4 bg-bgBlack py-5 px-5">
                    <div className="flex items-center gap-3 ">
                        <div
                            className="bg-gradient-to-r from-[#FFD858] via-[#FFB953] to-[#FF954E]
                                w-[70px] h-[70px] rounded-full flex items-center justify-center "
                        >
                            {item?.icon}
                        </div>
                        <div className="">
                            <div className="font-medium text-[18px] text-[#B8B8B8E5]">{item?.title}</div>
                            <p className="text-[#B8B8B8] text-2xl">{item?.count}</p>
                        </div>
                    </div>
                    {/* <div className="mt-2">
                        <p className="text-[12px]  font-medium text-gray-400">{item.date}</p>
                    </div> */}
                    {/* <div className="flex items-center justify-between mt-4">
                        <p>Total : {item?.total}</p>
                        <p>
                            Daily : <span className="text-[#006EEE]">{item?.daliy}</span>
                        </p>
                    </div> */}
                </div>
            ))}
        </div>
    );
};

export default Card;
