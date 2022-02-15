import React, {useContext} from 'react';
import AlertContext from '../../../context/alert/Alert.context';

const Alerter = () => {
    const {alert} = useContext(AlertContext);
    return alert !== null && (
        <p className="flex items-start mb-4 space-x-2">
            {alert.type === 'error' && (
                <svg className='w-6 h-6 flex-none mt-0.5' fill='none' viewBox='0 0 24 24'>
                    <circle cx='12' cy='12' r='12' fill='#fecdd3'></circle>
                    <path d='M8 8l8 8M16 8l-8 8' stroke='#b91c1c' strokeWidth='2'></path>
                </svg>
            )} <span className="flex-1 text-base font-semibold leading-7 text-white">
                <strong>{alert.message}</strong>
            </span>
        </p>
    )
};


export default Alerter;