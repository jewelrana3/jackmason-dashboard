import { ConfigProvider, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import Button from '../../components/shared/Button';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        console.log(values);
        navigate('/verify-otp');
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        borderRadius: 10,
                        // colorBorder: '',
                        colorPrimaryBorder: 'transparent',
                        hoverBorderColor: '',
                        controlOutline: 'none',
                        activeBorderColor: '',
                    },
                    Button: {
                        colorPrimaryHover: 'rgb(0,0,0)',
                    },
                },
            }}
        >
            <div className="flex items-center justify-center h-screen text-[#B8B8B8]">
                <div className="flex items-center justify-center p-6 bg-[#212526] rounded-md">
                    <div className="w-[500px]">
                        <div className=" space-y-3 text-center my-7">
                            <h1 className="text-3xl  font-medium mt-2">Forget Password</h1>
                            <p className="">Please enter your email for verification</p>
                        </div>

                        <Form
                            name="normal_ForgetPassword"
                            className="ForgetPassword-form"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <span className="text-[#B8B8B8] text-xl">Email</span>
                            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                <Input
                                    placeholder="Enter your email address"
                                    type="email"
                                    className="h-12 bg-[#212526] mt-2"
                                />
                            </Form.Item>

                            <Button
                                htmlType="submit"
                                className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold text-lg px-6  rounded-full transform transition-all duration-300 ease-in-out 0.5s ease hover:from-orange-400 w-full mt-4 "
                            >
                                GET OTP
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default ForgetPassword;
