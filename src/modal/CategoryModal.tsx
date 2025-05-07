import { Form, Input } from 'antd';
import { useEffect } from 'react';
import Modal from './Modal';
import Button from '../components/shared/Button';

interface DataType {
    key: string;
    name: string;
}

interface PakageModalProps {
    isOpen: boolean;
    onClose: () => void;
    edit: DataType | null;
}

export default function CategoryModal({ edit, isOpen, onClose }: PakageModalProps) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (edit?.key) {
            form.setFieldsValue({
                name: edit?.name,
            });
        } else {
            form.setFieldsValue({
                name: '',
            });
        }
    }, [edit]);

    const onFinish = (values: any) => {
        console.log('Submitted Payload:', values);
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="p-5 w-[500px]">
                    <h1 className="text-2xl mb-4">{edit ? 'Edit Category' : 'Add Category'}</h1>
                    <Form form={form} onFinish={onFinish} layout="vertical" className=" font-medium ">
                        <span className="text-[#B8B8B8]">Category Name</span>
                        <Form.Item name="name" rules={[{ required: true, message: 'Please enter category name' }]}>
                            <Input placeholder="Enter name" className="rounded-md h-10 mt-1" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                htmlType="submit"
                                style={{
                                    backgroundColor: '#188754',
                                    borderColor: '#188754',
                                    color: 'black',
                                }}
                                className="w-full bg-gradient-to-r from-[#FFD858] via-[#FFB953] to-[#FF954E]"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
}
