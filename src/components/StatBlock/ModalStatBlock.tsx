import Modal from "@/components/Modal";
import {Dispatch, SetStateAction, useState} from "react";

type ModalStatBlockType = {
    isModalOpen: boolean;
    mainStatValue: number;
    StatName: string;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    setMainStatValue: Dispatch<SetStateAction<number>>;
}

export default function ModalStatBlock ({isModalOpen, mainStatValue, StatName, setIsModalOpen, setMainStatValue}: ModalStatBlockType) {
    const [updatedStatValue, setUpdatedStatValue] = useState(mainStatValue)

    const minus = () => {
        setUpdatedStatValue(updatedStatValue - 1);
    }

    const plus = () => {
        setUpdatedStatValue(updatedStatValue + 1);
    }

    const confirm = () => {
        setMainStatValue(updatedStatValue)
        setIsModalOpen(false)
    }

    const cancel = () => {
        setUpdatedStatValue(mainStatValue)
        setIsModalOpen(false)
    }

    return (
        <Modal isOpen={isModalOpen} onClose={() => {
            setUpdatedStatValue(mainStatValue)
            setIsModalOpen(false)
        }}>
            <div className='flex flex-col text-center justify-center gap-5'>
                <span>{StatName}</span>

                <div className='flex gap-5 text-center justify-center'>
                    <div onClick={minus}>Minus</div>

                    <div>{updatedStatValue}</div>

                    <div onClick={plus}>Plus</div>
                </div>

                <div className='flex gap-10 justify-center'>
                    <div onClick={confirm}>Accept</div>

                    <div onClick={cancel}>Cancel</div>
                </div>
            </div>
        </Modal>
    )
}