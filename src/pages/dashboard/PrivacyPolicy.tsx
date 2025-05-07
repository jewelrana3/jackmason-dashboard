import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

import Button from '../../components/shared/Button';

export default function AboutUS() {
    const editor = useRef(null);

    const [content, setContent] = useState('');

    const handleOnSave = (value: string) => {
        console.log(value);
    };
    return (
        <>
            <div className="bg-black">
                <div className="">
                    <JoditEditor
                        className="border-none bg-black"
                        ref={editor}
                        value={content}
                        config={{ height: 550, theme: 'dark', readonly: false }}
                        onBlur={(newContent) => setContent(newContent)}
                    />
                </div>
            </div>

            <Button
                onClick={() => handleOnSave(content)}
                htmlType="submit"
                className="bg-gradient-to-r from-yellow-300 to-orange-400  font-bold text-lg px-6  rounded-full transform transition-all duration-300 ease-in-out 0.5s ease hover:from-orange-400 w-full mt-4 text-black"
            >
                Save
            </Button>
        </>
    );
}
