import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useState } from 'react';
import { LiaEditSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiPlus } from 'react-icons/fi';
import Swal from 'sweetalert2';
import CategoryModal from '../../../modal/CategoryModal';

interface DataType {
    key: string;
    name: string;
}

const data: DataType[] = [
    {
        key: '1',
        name: 'Title name 1',
    },
    {
        key: '2',
        name: 'Title name 2',
    },
    {
        key: '3',
        name: 'Title name 3',
    },
];

export default function Category() {
    const [modal, setModal] = useState<boolean | null>(null);
    const [edit, setEdit] = useState<DataType | null>(null);

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

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Serial ID',
            key: 'serial',
            render: (_text, _record, index) => index + 1,
        },
        {
            title: <span className="flex justify-center">Category Name</span>,
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <span className="flex justify-center">{text}</span>,
        },

        {
            title: <span className="flex justify-end px-20">Action</span>,
            key: 'action',
            render: (_, record) => (
                <div className="flex justify-end gap-5 px-20">
                    <button
                        onClick={() => {
                            setModal(true);
                            setEdit(record);
                        }}
                    >
                        <LiaEditSolid className="text-[#5C5C3D] text-[22px] cursor-pointer" />
                    </button>
                    <button onClick={handleDelete}>
                        <RiDeleteBin6Line className=" text-[22px] cursor-pointer text-red-500" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className=" rounded-2xl">
            <div className="flex items-center justify-end p-2">
                <button
                    onClick={() => setModal(true)}
                    className="flex items-center gap-2 bg-bgBlack px-4 py-4 rounded-2xl font-medium shadow-sm "
                >
                    <span className="">
                        <FiPlus className="text-[#FFB953]" />
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD858] via-[#FFB953] to-[#FF954E]">
                        Upload Slider
                    </span>
                </button>
            </div>
            <Table<DataType> columns={columns} dataSource={data} pagination={false} />

            {/* modal */}
            {modal && (
                //@ts-ignore
                <CategoryModal
                    edit={edit}
                    isOpen={modal}
                    onClose={() => {
                        setModal(null), setEdit(null);
                    }}
                />
            )}
        </div>
    );
}
