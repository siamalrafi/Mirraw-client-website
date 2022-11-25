import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Service = ({ service, }) => {
    const { name, description, id, img } = service;
    const { user } = useContext(AuthContext);




    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}!</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/category/${id}`}
                        >
                            <button className="btn text-2xl btn-primary">See All</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;