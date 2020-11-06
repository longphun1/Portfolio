import React from 'react';
import Modal from 'react-modal';

const MessageModal = (props) => (
    <Modal className="modal" isOpen={!!props.messager} contentLabel="Messager name" onRequestClose={props.removeModal} closeTimeoutMS={200}>
        <div className="modal-box">
            <h3>Your message have been sent, </h3>
            <h3>{props.messager}</h3>
            <button className="modal-button" onClick={props.removeModal}>Okay</button>
        </div>
    </Modal>
);

export default MessageModal;