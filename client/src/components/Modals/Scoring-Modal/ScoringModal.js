import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ThankImg from '../../../assets/img/cat-thank-you.png'
import ReplayButton from '../../Buttons/Replay-Button/ReplayButton';
import ScoreButton from '../../Buttons/Score-Button/ScoreButton';

export default function ScoringModal(props) {
    return (
            <Modal centered modalClassName="text-center" isOpen={true} toggle={props.onClose} className={props.className}>
                <ModalHeader toggle={props.onClose}>
                        <strong>{props.data.name+" "} </strong>
                        thanks you for your vote <i className="fas fa-heart red"></i>
                </ModalHeader>
                <ModalBody>
                    <div className="center column">
                        <img className="img-responsive" src={ThankImg} alt="cat who said thank you"/>
                    </div>
                    Current Score :{" " + String(props.data.vote+1)}
                </ModalBody>
                <ModalFooter>
                    <div className=" w-100 space-around">
                        <ReplayButton handleClick={props.onReplay} />
                        <ScoreButton handleClick={props.onShowScore}/>
                    </div>
                </ModalFooter>
            </Modal>
    )
}
