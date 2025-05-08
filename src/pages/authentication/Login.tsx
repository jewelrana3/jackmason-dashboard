import { Checkbox, ConfigProvider, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';

const Login = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values: { email: string; password: string }) => {
        console.log(values);
        navigate('/');

        form.resetFields();
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FBB040',
                },
                components: {
                    Input: {},
                    Button: {
                        colorPrimaryHover: 'rgb(0,0,0)',
                    },
                },
            }}
        >
            <div className="flex items-center justify-center h-screen text-[#B8B8B8]">
                <div className=" w-[650px] rounded-lg  p-5 bg-[#212526]">
                    <div className="space-y-3 text-center my-10">
                        <h1 className="text-2xl  font-semibold text-center mt-2">Login to Your Account</h1>
                        <p className="text-lg text-[#757575]">Please enter your email and password to continue</p>
                    </div>

                    <Form
                        name="normal_login"
                        className="login-form"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        form={form}
                    >
                        <span className="text-[#B8B8B8] text-xl">Email</span>
                        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input
                                placeholder="Enter your email address"
                                type="email"
                                className=" h-12 px-6 mt-2 bg-[#212526] border border-[#b8b8b8]"
                            />
                        </Form.Item>

                        <span className="text-[#B8B8B8] text-xl">Password</span>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input.Password
                                placeholder="Enter your password"
                                className=" h-12  px-6 bg-[#212526] mt-2"
                            />
                        </Form.Item>

                        <div className="flex items-center justify-between mb-4">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox className="text-lg text-[#B8B8B8]">Remember me</Checkbox>
                            </Form.Item>
                            <Link to="/forget-password" className="text-primary text-md text-[#B8B8B8]">
                                Forget password
                            </Link>
                        </div>

                        <Button
                            htmlType="submit"
                            className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold text-lg px-6  rounded-full transform transition-all duration-300 ease-in-out 0.5s ease hover:from-orange-400 w-full mt-4 "
                        >
                            Sign In
                        </Button>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Login;
