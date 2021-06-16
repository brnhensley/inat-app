import { useRef } from "react";
import ReactDom from "react-dom";
import PropTypes from 'prop-types';

// modal adapted from this tutorial
// https://javascript.plainenglish.io/how-to-create-a-popup-modal-in-react-39315907998e
export default function HelpModal(props) {

    // close the modal when clicking outside the modal.
    const modalRef = useRef();

    const close = (e) => {
        if (e.target === modalRef.current) {
            console.log("TURE");
            props.closeModal(false);
        } else {
            console.log('FASLE');
            console.log(e.target);
            console.log(modalRef.current);
        }
    };

    return ReactDom.createPortal(
        <div className="container" ref={modalRef} onClick={close}>
            <div className="modal">
                <button onClick={() => props.closeModal(false)}>X</button>
                <p>iNaturalist is a social network for people to post images and sounds of wildlife to get identifications from the community. This app uses the iNaturalist API to help users discover what species have been seen in a given area.  Enter GPS coordinates in decimal form, it's easiest to get those from <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/">Google maps</a>. See the <a target="_blank" rel="noreferrer" href="https://github.com/brnhensley/inat-app#readme">README</a> for more info.</p>
            </div>
        </div>,
        document.getElementById("overlay")
    );
};

HelpModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};
