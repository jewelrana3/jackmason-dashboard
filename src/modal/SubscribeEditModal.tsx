import { useEffect, useState } from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const { Option } = Select;

interface PackageModalProps {
    isOpen: boolean;
    onClose: () => void;
    edit?: {
        _id?: string;
        price?: number;
        description?: string;
    };
}

export default function SubscribeEditModal({ isOpen, onClose, edit }: PackageModalProps) {
    const [form] = Form.useForm();
    const [isOfferModalOpen, setOfferModalOpen] = useState(false);
    const [newOffer, setNewOffer] = useState('');

    const [offers, setOffers] = useState([
        '120 day permission to use',
        'Free training tutorial',
        'Free journal',
        'Free consultations',
        '20 Community post',
    ]);

    useEffect(() => {
        if (edit?._id) {
            form.setFieldsValue({
                price: edit?.price,
                description: edit?.description,
            });
        }
    }, [edit, form]);

    const removeOffer = (index: number) => {
        const updated = offers.filter((_, i) => i !== index);
        setOffers(updated);
    };

    const handleAddOffer = () => {
        if (newOffer.trim()) {
            setOffers([...offers, newOffer]);
            setNewOffer('');
            setOfferModalOpen(false);
        }
    };

    const onFinish = async (values: { price: number; validity: number; description: string }) => {
        console.log(values);
    };

    return (
        <>
            <Modal open={isOpen} onCancel={onClose} footer={null}>
                <div className="">
                    <h1 className="text-2xl mb-4">{edit ? 'Edit Subscribe' : 'Add Subscribe'}</h1>
                    <Form form={form} onFinish={onFinish} layout="vertical" className="text-[#B8B8B8] font-medium ">
                        {!edit && (
                            <div>
                                <span className="">Package Name</span>
                                <Form.Item
                                    name="packageName"
                                    rules={[{ required: true, message: 'Please select a package name!' }]}
                                >
                                    <Select
                                        placeholder="Select Package Name"
                                        style={{ width: '100%', marginTop: '5px' }}
                                    >
                                        <Option value="Premium Plan">Premium Plan</Option>
                                        <Option value="Standard Plan">Standard Plan</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        )}

                        <div>
                            <span className="">Price</span>
                            <Form.Item name="price" rules={[{ required: true, message: 'Please enter package price' }]}>
                                <Input
                                    type="number"
                                    placeholder="Enter price"
                                    className="rounded-md h-10 mt-2 bg-[#212526] "
                                />
                            </Form.Item>
                        </div>

                        {/* Package Offers Section */}
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-2 px-1">
                                <h2 className="font-medium">Package Offers</h2>
                                <button type="button" onClick={() => setOfferModalOpen(true)}>
                                    <FiPlusCircle className="text-orange-500 w-6 h-6" />
                                </button>
                            </div>
                            <div className="border border-gray-300 rounded-lg p-4 space-y-3">
                                {offers.map((offer, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <div className="flex items-center gap-2 ">
                                            <IoMdCheckmarkCircle className="text-green-500 w-5 h-5" />
                                            <span>{offer}</span>
                                        </div>
                                        <button type="button" onClick={() => removeOffer(index)}>
                                            <FiMinusCircle className="text-gray-500 w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{
                                    backgroundColor: '#188754',
                                    borderColor: '#188754',
                                    color: '#fff',
                                }}
                                className="w-full py-5"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>

            {/* Modal for adding new offer */}
            <Modal
                open={isOfferModalOpen}
                onCancel={() => setOfferModalOpen(false)}
                onOk={handleAddOffer}
                okText="Add"
                title={<div style={{ backgroundColor: '#212526', color: '#fff', padding: '10px' }}>Add New Offer</div>}
            >
                <Input
                    className="rounded-md bg-[#212526]"
                    value={newOffer}
                    onChange={(e) => setNewOffer(e.target.value)}
                    placeholder="Enter offer name"
                />
            </Modal>
        </>
    );
}
