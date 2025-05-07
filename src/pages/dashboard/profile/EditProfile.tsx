import { Form, Input, Avatar } from 'antd';
import { BiUpload } from 'react-icons/bi';
import Button from '../../../components/shared/Button';

interface formValues {
    name: string;
    email: string;
    profile: string;
}

export default function EditProfile() {
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const [form] = Form.useForm();
    const onFinish = async (values: formValues) => {
        console.log(values);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const file = e.target.files?.[0];
        // //@ts-ignore
        // setSelectedImage(file);
        // if (file) {
        //     setPreviewUrl(URL.createObjectURL(file));
        // }
        // form.setFieldsValue({
        //     profile: file?.name,
        // });
    };

    return (
        <div className="overflow-hidden text-[#B8B8B8]">
            <div className="w-[1035px] mx-auto">
                <div className="flex justify-between space-x-6 mt-12">
                    <div className="flex gap-4">
                        <div>
                            <Avatar
                                className="border border-white"
                                size={100}
                                src="https://i.ibb.co.com/2YWbmYtm/df96ee07b3ad8cfad69be782cb4a27ca.jpg"
                            />
                        </div>
                        <div className="flex items-center gap-10 relative">
                            <h3 className="font-semibold text-2xl">Jahid</h3>

                            <div className="">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />

                                <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full cursor-pointer absolute -ml-36 mt-4 bg-slate-400 text-white">
                                    <BiUpload size={20} onClick={() => document.getElementById('file')?.click()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <Form form={form} onFinish={onFinish} layout="vertical">
                        <div>
                            <span className="text-[20px] font-semibold text-[#B8B8B8]">Name</span>
                            <div className="mt-3">
                                <Form.Item name="name" rules={[{ required: true }]}>
                                    <Input
                                        className="h-12  rounded-xl border-none bg-[#212526] placeholder:text-[#B8B8B8E5]"
                                        placeholder="Enter your name"
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div>
                            <span className="text-[20px] font-semibold text-[#B8B8B8]">Email</span>
                            <div className="mt-3">
                                <Form.Item name="email" rules={[{ required: true }]}>
                                    <Input
                                        className="h-12 rounded-xl border-none bg-[#212526] placeholder:text-[#B8B8B8E5]"
                                        placeholder="Enter your email"
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button
                                htmlType="submit"
                                className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold text-lg px-6  rounded-full transform transition-all duration-300 ease-in-out 0.5s ease hover:from-orange-400 w-full mt-4 "
                            >
                                Save & Change
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
