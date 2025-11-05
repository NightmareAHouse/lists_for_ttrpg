import {createPortal} from "react-dom";

type ModalType = {
    isOpen: boolean;
    onClose: () => void;
    isFullModal?: boolean;
    children: React.ReactNode;
};

function Modal({isOpen, onClose, isFullModal, children}: ModalType) {
    const fullModalClass = isFullModal ? "w-full h-full" : "w-90 h-auto";

    const modalContent = (
        <div className="w-full h-full modal-background absolute top-0 left-0">
            <div className={'p-5 absolute-centered modal-container' + ` ${fullModalClass}`}>
                {children}
            </div>

            <div className='w-8 h-8 bg-red-600 absolute top-2 right-2' onClick={onClose}/>
        </div>
    );

    if (!isOpen) return;

    return createPortal(modalContent, document.body);
}

export default Modal;
