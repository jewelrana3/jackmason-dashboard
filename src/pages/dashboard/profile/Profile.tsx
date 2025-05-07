import { Form, Input, Avatar, ConfigProvider } from 'antd';
import { MdOutlineModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

import CustomButton from '../../../components/shared/Button';

export default function Profile() {
    const [form] = Form.useForm();

    // useEffect(() => {
    //     if (data) {
    //         form.setFieldsValue({
    //             name: data?.data?.name,
    //             email: data?.data?.email,
    //             profile: data?.data?.profile,
    //         });
    //     }
    // }, [data, form]);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (isError) {
    //     return <div>Error loading profile.</div>;
    // }

    return (
        <div className="flex justify-center items-center text-[#B8B8B8]">
            <div className="w-[1035px] mx-auto">
                <div className="flex items-center justify-between gap-4  mt-12">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Avatar
                                size={100}
                                src="https://i.ibb.co.com/2YWbmYtm/df96ee07b3ad8cfad69be782cb4a27ca.jpg"
                                className="border-2 border-[#8AC2FF]"
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold text-2xl">jahid</h3>
                        </div>
                    </div>
                    <div className="">
                        <Link to="/edit-profile">
                            <CustomButton className=" flex items-center justify-center space-x-2 cursor-pointer w-36">
                                <MdOutlineModeEdit className="text-xl mr-2" /> {/* This adds the icon */}
                                Edit Profile
                            </CustomButton>
                        </Link>
                    </div>
                </div>

                <div className="mt-5">
                    <ConfigProvider
                        theme={{
                            components: {
                                // Input: {
                                //     hoverBg: 'rgb(207,49,49)',
                                //     activeBg: 'rgb(139,83,83)',
                                //     colorText: 'rgb(82,196,26)',
                                // },
                            },
                        }}
                    >
                        <Form form={form} layout="vertical">
                            <div className="">
                                <span className=" text-[20px] font-semibold text-[#B8B8B8]">Full Name</span>
                                <div className="mt-3 ">
                                    <Form.Item name="name" rules={[{ required: true }]}>
                                        <Input
                                            className="h-12 rounded-xl border-none bg-[#212526] placeholder:text-[#B8B8B8E5]"
                                            placeholder="Enter your name"
                                            // readOnly
                                        />
                                    </Form.Item>
                                </div>
                            </div>

                            <div className="">
                                <span className=" text-[20px] font-semibold text-[#B8B8B8]">Email</span>
                                <div className="mt-3">
                                    <Form.Item name="email" rules={[{ required: true }]}>
                                        <Input
                                            className="h-12 bg-[#212526] rounded-xl border-none placeholder:text-[#B8B8B8E5]"
                                            placeholder="Enter your gmail"
                                            // readOnly
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}
