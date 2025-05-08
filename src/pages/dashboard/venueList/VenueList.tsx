import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface DataType {
    key: React.Key;
    no: string;
    name: string;
    address: string;
    price: string;
    category: string;
    bookingCapacity: string;
    status: string;
    date: string;
}

const data = [
    {
        key: '1',
        no: '#2472',
        name: 'Opel Corsa',
        address: '3891 Ranchview Dr. Richardson',
        price: 'SYP 130,019,000',
        category: 'Bike',
        bookingCapacity: '300',
        date: '2/11/12',
        status: 'Posted',
        location: 'Brooklyn, New York',
    },
    {
        key: '2',
        no: '#2450',
        name: 'Opel Corsa',
        address: '4517 Washington Ave. Manchester',
        price: 'SYP 130,019,000',

        category: 'Car',
        bookingCapacity: '400',
        date: '8/30/14',
        status: 'Holding',
        location: 'Brooklyn, New York',
    },
    {
        key: '3',
        no: '#2450',
        name: 'Opel Corsa',
        address: '3517 W. Gray St. Utica',
        price: 'SYP 130,019,000',

        category: 'Bike',
        bookingCapacity: '300',
        date: '8/2/19',
        status: 'Holding',
        location: 'Brooklyn, New York',
    },
    {
        key: '4',
        no: '#2450',
        name: 'Opel Corsa',
        address: '2464 Royal Ln. Mesa',
        price: 'SYP 130,019,000',

        category: 'Car',
        bookingCapacity: '400',
        status: 'Holding',
        date: '8/16/13',
        location: 'Brooklyn, New York',
    },
    {
        key: '5',
        no: '#2450',
        name: 'Opel Corsa',
        address: '8502 Preston Rd. Inglewood',
        price: 'SYP 130,019,000',

        category: 'Car',
        bookingCapacity: '500',
        date: '5/19/12',
        status: 'Posted',
        location: 'Brooklyn, New York',
    },
    {
        key: '6',
        no: '#2450',
        name: 'Opel Corsa',
        address: '3517 W. Gray St. Utica',
        price: 'SYP 130,019,000',

        category: 'Bike',
        bookingCapacity: '200',
        date: '7/27/13',
        status: 'Re-post',
        location: 'Brooklyn, New York',
    },
    {
        key: '9',
        no: '#2450',
        name: 'Opel Corsa',
        address: '3517 W. Gray St. Utica',
        price: 'SYP 130,019,000',
        category: 'Car',
        bookingCapacity: '900',
        date: '10/6/13',
        status: 'Posted',
        location: 'Brooklyn, New York',
    },
    {
        key: '10',
        no: '#2472',
        name: 'Opel Corsa',
        address: '3517 W. Gray St. Utica',
        price: 'SYP 130,019,000',

        category: 'Car',
        bookingCapacity: '100',
        date: '5/30/14',
        status: 'Posted',
        location: 'Brooklyn, New York',
    },
    {
        key: '11',
        no: '#2450',
        name: 'Opel Corsa',
        address: '2715 Ash Dr. San Jose',
        price: 'SYP 130,019,000',

        category: 'Car',
        bookingCapacity: '450',
        date: '4/4/18',
        status: 'Posted',
        location: 'Brooklyn, New York',
    },
];

export default function VenueList() {
    const navigate = useNavigate();
    const columns: TableColumnsType<DataType> = [
        {
            title: 'Serial ID',
            dataIndex: 'no',
        },
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Event Name',
            dataIndex: 'address',
            key: 'address',
        },

        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },

        {
            title: 'Booking Capacity',
            dataIndex: 'bookingCapacity',
            key: 'bookingCapacity ',
            render: (_, record) => <span className="ml-9">{record?.bookingCapacity}</span>,
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-8" key={record.no}>
                    <button className="mt-1" onClick={() => navigate('/venue-details')}>
                        <MdOutlineRemoveRedEye size={22} className="text-[#6CA0DC]" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="rounded-lg">
            <Table columns={columns} dataSource={data} rowKey={(record) => `${record.key} `} />
        </div>
    );
}
