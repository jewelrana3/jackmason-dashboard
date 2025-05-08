import MainLayout from './components/layout/MainLayout';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import global styles
function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#FBB040',
                    },
                    components: {
                        Input: {
                            colorText: '#B8B8B8E5',
                            hoverBorderColor: '#212526',
                            activeBorderColor: '#212526',
                            activeBg: '#212526',
                            hoverBg: '#212526',
                        },
                        Table: {
                            headerColor: '#B8B8B8',
                            headerBg: '#212526',
                            colorBgContainer: '#181c1d ',
                            colorText: '#B8B8B8E5',
                            headerSplitColor: '',
                            borderColor: '#B8B8B8E5',
                            padding: 12,
                            fontFamily: 'Nunito',
                        },
                        Select: {
                            colorText: '#929292',
                            colorTextPlaceholder: '#B8B8B8E5',
                            selectorBg: '',
                        },

                        Switch: {
                            handleBg: '#188A50',
                            colorPrimary: '#E7E7E7',
                            colorPrimaryHover: '#E7E7E7np',
                        },
                        DatePicker: {
                            hoverBorderColor: '',
                            activeBorderColor: '',
                            colorText: '#929292',
                            fontSize: 14,
                        },
                    },
                }}
            >
                <MainLayout />
            </ConfigProvider>
            <ToastContainer position="top-right" />
        </>
    );
}

export default App;
