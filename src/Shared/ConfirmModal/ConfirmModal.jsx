import React from 'react';

const ConfirmModal = ({ title, massge, modalData, closeModal, successAction, successButtonName }) => {




    return (
        <div>

            <input type="checkbox" id="confirmation-modal" className="bg-gray-800 modal-toggle" />
            <div className="modal ">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{massge}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn">{successButtonName}</label>
                        <label onClick={closeModal} className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;