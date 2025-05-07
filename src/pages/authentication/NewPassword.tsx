import { ConfigProvider, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import Button from '../../components/shared/Button';

const NewPassword = () => {
    const navigate = useNavigate();

    const onFinish = async (values: { newPassword: string; confirmPassword: string }) => {
        console.log(values);
        navigate('/login');
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FBB040',
                    colorBgContainer: '#FFFFFF',
                },
                components: {
                    Input: {
                        borderRadius: 10,
                        colorBorder: 'transparent',
                        colorPrimaryBorder: 'transparent',
                        hoverBorderColor: 'transparent',
                        controlOutline: 'none',
                        activeBorderColor: 'transparent',
                    },

                    Button: {
                        colorPrimaryHover: 'rgb(0,0,0)',
                    },
                },
            }}
        >
            <div className="flex items-center justify-center h-screen ">
                <div className="flex items-center justify-center p-7 bg-[#212526] rounded-md text-[#B8B8B8]">
                    <div className=" w-[550px] ">
                        <div className=" space-y-3 text-center my-7">
                            <h1 className="text-3xl  font-medium mt-2">Reset Password</h1>
                            <p className="text-[#929292]">Please enter your email and password to continue</p>
                        </div>

                        <Form
                            name="normal_NewPassword"
                            className="NewPassword-form"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <span className="text-[#B8B8B8] text-xl">Current Password</span>
                            <Form.Item
                                name="currentPassword"
                                rules={[{ required: true, message: 'Please input new password!' }]}
                            >
                                <Input.Password placeholder="Enter current password" className=" h-12 px-6 mt-2" />
                            </Form.Item>
                            <span className="text-[#B8B8B8] text-xl">New Password</span>
                            <Form.Item
                                name="newPassword"
                                rules={[{ required: true, message: 'Please input new password!' }]}
                            >
                                <Input.Password placeholder="Enter new password" className=" h-12 px-6 mt-2" />
                            </Form.Item>
                            <span className="text-[#B8B8B8] text-xl">Confirm Password</span>
                            <Form.Item
                                name="confirmPassword"
                                rules={[{ required: true, message: 'Please input confirm password!' }]}
                            >
                                <Input.Password placeholder="Enter confirm password" className="h-12 px-6 mt-2" />
                            </Form.Item>

                            <Button
                                htmlType="submit"
                                className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold text-lg px-6  rounded-full transform transition-all duration-300 ease-in-out 0.5s ease hover:from-orange-400 w-full mt-4 "
                            >
                                Confirm
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default NewPassword;
