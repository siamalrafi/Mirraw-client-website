import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, bgClass, icon } = card;



    return (
        <div>
            <div className={`card text-white p-6 md:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure>
                    <img src={icon} alt="icon" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;