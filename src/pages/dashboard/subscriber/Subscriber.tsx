import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import Swal from 'sweetalert2';

interface DataType {
    key: React.Key;
    no: string;
    name: string;
    jdate: string;
    edate: string;
    total?: string;
    // status?: Activeng;
}
const data = [
    {
        key: '1',
        no: '#2472',
        name: 'Admin Asadujjaman',
        jdate: '2-11-12',
        edate: '9-3-25',

        contentPrice: 'SYP 130,019,000',

        status: 'Active',
    },
    {
        key: '2',
        no: '#2472',
        name: 'Admin Asadujjaman',
        jdate: '8-30-14',
        edate: '9-3-25',

        total: 'SYP 260,038,000',
        status: 'Active',
    },
    {
        key: '3',
        no: '#2450',
        name: 'Admin Asadujjaman',
        jdate: '8-2-9',
        edate: '9-3-25',

        total: 'SYP 260,038,000',
        status: 'Active',
    },
    {
        key: '4',
        no: '#2450',
        name: 'Dr. Anna KOWALSKA',
        jdate: '8-16-13',
        edate: '9-3-25',

        total: 'SYP 260,038,000',
        status: 'Active',
    },
];

export default function Subscriber() {
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
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Joining Date',
            dataIndex: 'jdate',
            key: 'jdate',
        },
        {
            title: 'Expire Date',

            dataIndex: 'edate',
            key: 'edate',
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-24" key={record.no}>
                    <button className="mt-1">
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
        <div className="bg-white rounded-lg">
            {/* <SearchCategory /> */}
            {/* Table with Checkbox Selection */}
            <Table columns={columns} dataSource={data} rowKey={(record) => `${record.key}`} />
        </div>
    );
}
