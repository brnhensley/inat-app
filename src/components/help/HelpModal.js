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
            props.closeModal(false);
        }
    };

    return ReactDom.createPortal(
        <div className="container" ref={modalRef} onClick={close}>
            <div className="modal">
                <button onClick={() => props.closeModal(false)}>X</button>
                <p>This is an app that pulls a list of species found in a given area from wildlife sightings posted on the website <a target="_blank" rel="noreferrer" href="https://www.inaturalist.org/">iNaturalist</a>. Enter GPS coordinates in decimal form, it's easiest to get those from right-clicking on <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/">Google maps</a>. Results are ordered by the least observed to most observed. See the <a target="_blank" rel="noreferrer" href="https://github.com/brnhensley/inat-app#readme">README</a> for more info.</p>
            </div>
        </div >,
        document.getElementById("overlay")
    );
};

HelpModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};
