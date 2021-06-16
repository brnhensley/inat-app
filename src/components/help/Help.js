// ADD INFO MODAL/POPUP TO EXPLAIN WHAT THE APP DOES
import '../../css/Help.css';
import { useState } from 'react';
import QuestionMark from './QuestionMark';
import HelpModal from './HelpModal';

export default function Help() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <QuestionMark openModal={setShowModal} />
            {showModal ? <HelpModal closeModal={setShowModal} /> : null}
        </>
    );
};