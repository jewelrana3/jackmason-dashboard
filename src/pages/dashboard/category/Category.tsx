import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useState } from 'react';
import { LiaEditSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiPlus } from 'react-icons/fi';
import Slider1Modal from '../../../modal/Slider1Modal';
import Swal from 'sweetalert2';

interface DataType {
    key: string;
    name: string;
    image: string;
    code: string;
}

const data: DataType[] = [
    {
        key: '1',
        name: 'Title name 1',
        image: 'https://i.ibb.co/Nn1R60c/image-map-usa-filled-stars-600nw-2005076390.webp',
        code: '1234',
    },
    {
        key: '2',
        name: 'Title name 2',
        image: 'https://i.ibb.co/Nn1R60c/image-map-usa-filled-stars-600nw-2005076390.webp',
        code: '5645',
    },
    {
        key: '3',
        name: 'Title name 3',
        image: 'https://i.ibb.co/Nn1R60c/image-map-usa-filled-stars-600nw-2005076390.webp',
        code: '3444',
    },
];

export default function Slider1() {
    const [slider1, setSlider1] = useState(false);
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
            render: (_text, _record, index) => index + 1, // ✅ Serial number without relying on data
        },
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            // render: (text: string) => <a>{text}</a>,
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className="flex gap-5">
                    <button
                        onClick={() => {
                            setSlider1(true);
                            setEdit(record);
                        }}
                    >
                        <LiaEditSolid className="text-[#5C5C3D] text-[22px] cursor-pointer" />
                    </button>
                    <button onClick={handleDelete}>
                        <RiDeleteBin6Line className=" text-[22px] cursor-pointer" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className=" rounded-2xl">
            <div className="flex items-center justify-end p-2">
                <button
                    onClick={() => setSlider1(true)}
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
            {slider1 && (
                //@ts-ignore
                <Slider1Modal
                    edit={edit}
                    isOpen={slider1}
                    onClose={() => {
                        setSlider1(false), setEdit(null);
                    }}
                />
            )}
        </div>
    );
}
