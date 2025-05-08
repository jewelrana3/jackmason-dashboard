import { useState } from 'react';

import Premium from './Premium';
import StandCard from './StandCard';
import SubscribeEditModal from '../../../modal/SubscribeEditModal';

export default function Subscriber() {
    const [add, setAdd] = useState<boolean | null>(null);
    return (
        <>
            <div className="text-[#B8B8B8E5] flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FFD858] to-[#FF954E] bg-clip-text text-transparent">
                    Subscription Plans
                </h1>
                <div className="text-xl font-bold  flex items-center gap-2 bg-[#212526] p-3 rounded-lg">
                    {/* <span className="flex items-center gap-2">
                        <img src={editL} alt="edit" />
                    </span> */}
                    <button
                        className="bg-transparent text-transparent bg-gradient-to-r from-[#FFD858] to-[#FF954E] bg-clip-text"
                        onClick={() => setAdd(true)}
                    >
                        Add Subscription
                    </button>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="">
                    <StandCard />
                </div>
                <div className="">
                    <Premium />
                </div>
            </div>

            {/* modal show */}
            {add && <SubscribeEditModal isOpen={add} onClose={() => setAdd(null)} />}
        </>
    );
}
