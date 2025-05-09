import { ConfigProvider, Form, Input } from 'antd';
import Button from '../../../components/shared/Button';

export default function ChangePassword() {
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        console.log(values);
    };

    return (
        <div className="flex flex-col mt-[6%]">
            <div className="flex items-center justify-center mt-10">
                <div className="w-full lg:w-2/3  rounded-xl  pb-5 ">
                    <ConfigProvider
                        theme={{
                            components: {},
                        }}
                    >
                        <Form onFinish={onFinish} layout="vertical" form={form}>
                            <span className=" text-[20px] font-semibold text-[#B8B8B8]">Current password</span>
                            <Form.Item
                                name="currentPassword"
                                className="text-black"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your current password!',
                                    },
                                    {
                                        min: 6,
                                        message: 'Please input your current password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    className="h-12 bg-[#212526] placeholder-textGray rounded-xl border-none mt-1"
                                    placeholder="enter your password "
                                />
                            </Form.Item>
                            <span className=" text-[20px] font-semibold text-[#B8B8B8]">New Password</span>
                            <Form.Item
                                name="newPassword"
                                className="text-[#B8B8B8]"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your new password!',
                                    },
                                    {
                                        min: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter your password"
                                    className="h-12 bg-[#212526]  rounded-xl border-none mt-1"
                                />
                            </Form.Item>

                            <span className=" text-[20px] font-semibold text-[#B8B8B8]">Confirm Password</span>
                            <Form.Item
                                name="confirmPassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your new password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    className="h-12 bg-[#212526]  rounded-xl border-none mt-1"
                                    placeholder="Enter your password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                defaultBg: '',

                                                defaultBorderColor: '',
                                                defaultActiveBorderColor: '',
                                                defaultColor: '',
                                                defaultActiveColor: '',
                                            },
                                        },
                                    }}
                                >
                                    <Button
                                        htmlType="submit"
                                        className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold text-lg px-6  rounded-full transform transition-all duration-300 ease-in-out 0.5s ease hover:from-orange-400 w-full mt-4 "
                                    >
                                        Submit
                                    </Button>
                                </ConfigProvider>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}
