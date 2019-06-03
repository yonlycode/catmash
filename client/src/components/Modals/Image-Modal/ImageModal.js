import React from 'react'
import { Modal } from 'reactstrap';

export default function ImageModal(props) {
    return (
        <div>
            <Modal centered modalClassName="text-center" isOpen={true} toggle={props.onClose} className={props.className}>
                <img src={props.img} onClick={props.onClose} alt={props.alt} className="img-responsive" />

            </Modal>
        </div>
    )
}
