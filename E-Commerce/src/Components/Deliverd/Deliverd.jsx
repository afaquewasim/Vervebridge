import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShippingFast, faBoxOpen, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const DeliveryStatusWidget = () => {
    const [dates, setDates] = useState({
        orderDate: '',
        shipDate: '',
        deliveryDate: ''
    });

    useEffect(() => {
        const today = new Date();

        const orderedDate = today.toLocaleDateString("en-US", { month: 'short', day: 'numeric' });
        
        const shipDate = new Date(today);
        shipDate.setDate(today.getDate() + 1);
        const formattedShipDate = shipDate.toLocaleDateString("en-US", { month: 'short', day: 'numeric' });

        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + 5);
        const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", { month: 'short', day: 'numeric' });

        setDates({
            orderDate: orderedDate,
            shipDate: formattedShipDate,
            deliveryDate: formattedDeliveryDate
        });
    }, []);

    return (
        <div className="flex flex-row justify-evenly items-center text-sm mb-1.5 leading-5 py-3.5 px-2.5 bg-slate-700 border border-dotted border-white text-white rounded-md">
            <div className="flex flex-col items-center mx-3.5">
                <FontAwesomeIcon icon={faShoppingBag} className="text-2xl mb-1.5 text-gray-500" />
                <div className="font-bold mb-1.5">Ordered</div>
                <div className="text-xs text-gray-400">{dates.orderDate}</div>
            </div>
            <div className="flex flex-col items-center mx-3.5">
                <FontAwesomeIcon icon={faAngleDoubleRight} className="text-2xl mb-1.5 text-gray-500" />
            </div>
            <div className="flex flex-col items-center mx-3.5">
                <FontAwesomeIcon icon={faShippingFast} className="text-2xl mb-1.5 text-gray-500" />
                <div className="font-bold mb-1.5">Shipped</div>
                <div className="text-xs text-gray-400">{dates.shipDate}</div>
            </div>
            <div className="flex flex-col items-center mx-3.5">
                <FontAwesomeIcon icon={faAngleDoubleRight} className="text-2xl mb-1.5 text-gray-500" />
            </div>
            <div className="flex flex-col items-center mx-3.5">
                <FontAwesomeIcon icon={faBoxOpen} className="text-2xl mb-1.5 text-gray-500" />
                <div className="font-bold mb-1.5">Delivered</div>
                <div className="text-xs text-gray-400">{dates.deliveryDate}</div>
            </div>
        </div>
    );
}

export default DeliveryStatusWidget;
