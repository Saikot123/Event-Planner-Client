import { PiSmileySadLight } from 'react-icons/pi';

const NoEvent = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 text-secondary py-14 bg-base-300'>
            <div>
                <PiSmileySadLight size={150} />
            </div>
            <p className='text-3xl font-semibold'>
                No Events Found!!!
            </p>
        </div>
    );
};

export default NoEvent;