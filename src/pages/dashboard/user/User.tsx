import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useState } from 'react';
import UserDetail from '../../../modal/UserDetails';

interface DataType {
    key: React.Key;
    no: string;
    name: string;
    address: string;
    email: string;
    contact: string;
    date: string;
}

const data = [
    {
        key: '1',
        no: '#24721',
        name: 'Admin Asadujjaman',
        address: '3891 Ranchview Dr. Richardson',
        email: 'kenzi.lawson@example.com',
        contact: '225.555.0118',
        date: '2/11/12',
    },
    {
        key: '2',
        no: '#26552',
        name: 'Admin Asadujjaman',
        address: '4517 Washington Ave. Manchester',
        email: 'sara.cruz@example.com',
        contact: '203.555.0106',
        date: '8/30/14',
    },
    {
        key: '3',
        no: '#24563',
        name: 'Admin Asadujjaman',
        address: '3517 W. Gray St. Utica',
        email: 'nathan.roberts@example.com',
        contact: '239.555.0108',
        date: '8/2/19',
    },
    {
        key: '4',
        no: '#2424',
        name: 'Dr. Anna KOWALSKA',
        address: '2118 Thornridge Cir. Syracuse',
        email: 'alma.lawson@example.com',
        contact: '270.555.0117',
        date: '8/16/13',
    },
    {
        key: '5',
        no: '#247865',
        name: "Dr. Michael O'CONNOR",
        address: '2972 Westheimer Rd. Santa Ana',
        email: 'tim.jennings@example.com',
        contact: '262.555.0131',
        date: '5/19/12',
    },
    {
        key: '6',
        no: '#24456',
        name: 'Dr. Yasmin AL-FARSI',
        address: '2464 Royal Ln. Mesa',
        email: 'willie.jennings@example.com',
        contact: '205.555.0100',
        date: '7/27/13',
    },
    {
        key: '7',
        no: '#24727',
        name: 'Dr. Leila BEN AMAR',
        address: '8502 Preston Rd. Inglewood',
        email: 'bill.sanders@example.com',
        contact: '307.555.0133',
        date: '10/6/13',
    },
    {
        key: '8',
        no: '#24578',
        name: 'Dr. Elena PETROVA',
        address: '6391 Elgin St. Celina',
        email: 'debra.holt@example.com',
        contact: '201.555.0124',
        date: '9/23/16',
    },
    {
        key: '9',
        no: '#2499',
        name: 'Dr. Sergei IVANOV',
        address: '2118 Thornridge Cir. Syracuse',
        email: 'curtis.weaver@example.com',
        contact: '704.555.0127',
        date: '12/10/13',
    },
    {
        key: '10',
        no: '#242310',
        name: 'Dr. Sofia OLIVEIRA',
        address: '4140 Parker Rd. Allentown',
        email: 'michelle.rivera@example.com',
        contact: '671.555.0110',
        date: '5/30/14',
    },
    {
        key: '11',
        no: '#249811',
        name: 'Dr. Ahmed KHAN',
        address: '3517 W. Gray St. Utica',
        email: 'felicia.reid@example.com',
        contact: '603.555.0123',
        date: '4/4/18',
    },
];

export default function User() {
    const [UserDetails, setUserDetails] = useState<boolean | null>(null);
    const columns: TableColumnsType<DataType> = [
        {
            title: 'Serial ID',
            dataIndex: 'no',
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact No',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Joining Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-8" key={record.no}>
                    <button className="mt-1" onClick={() => setUserDetails(true)}>
                        <MdOutlineRemoveRedEye size={22} className="text-[#6CA0DC]" />
                    </button>

                    <button className="mt-1" onClick={handleDelete}>
                        <RiDeleteBinLine size={22} className="text-red-400" />
                    </button>
                </div>
            ),
        },
    ];

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                });
            }
        });
    };

    return (
        <>
            <div className=" rounded-lg">
                {/* Table with Checkbox Selection */}
                <Table columns={columns} dataSource={data} rowKey={(record) => `${record.key}`} />
            </div>

            {/* user details */}

            {UserDetails && <UserDetail isOpen={UserDetails} onClose={() => setUserDetails(null)} />}
        </>
    );
}
