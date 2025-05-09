import { ConfigProvider, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';

const VerifyOtp = () => {
    const navigate = useNavigate();

    const onFinish = async (values: { otp: number | null }) => {
        console.log(values);
        navigate('/new-password');
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        // lineHeight: 3,
                        controlHeight: 50,

                        borderRadius: 10,
                    },
                },
                token: {
                    colorPrimary: '#FBB040',
                },
            }}
        >
            <div className="flex items-center justify-center h-screen ">
                <div className="flex  items-center justify-center pl-8 bg-[#212526] rounded-md px-2">
                    <div className=" w-[500px]">
                        <div className=" space-y-3 text-center my-10 text-[#B8B8B8]">
                            <h1 className="text-3xl  font-medium  mt-2">Verify OTP</h1>
                            <p className="">Please check your email. We have sent a code to contact @gmail.com</p>
                        </div>

                        <Form
                            name="normal_VerifyOtp"
                            className="my-5"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                className="flex items-center justify-center mx-auto input"
                                name="otp"
                                rules={[{ required: true, message: 'Please input otp code here!' }]}
                            >
                                <Input.OTP
                                    style={{
                                        width: 300,
                                    }}
                                    className=""
                                    // variant="filled"
                                    length={6}
                                />
                            </Form.Item>

                            <Button
                                htmlType="submit"
                                className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold text-lg px-6  rounded-full transform transition-all duration-300 ease-in-out 0.5s ease hover:from-orange-400 w-full mt-4 "
                            >
                                Verify
                            </Button>

                            <div className="text-lg flex items-center justify-between gap-2 mb-8 text-[#B8B8B8] px-4">
                                <p className="">Didn't receive the code?</p>
                                <p
                                    className="text-[#79CAA1] font-semibold underline cursor-pointer"
                                    // onClick={handleResendCode}
                                >
                                    Resend
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default VerifyOtp;
