import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
    const dispatch = useDispatch();
    const { isModalOpen  } = useSelector(state=> state.ui);

    const openModal = () => {
        dispatch( onOpenDateModal() );
    }

    const closeModal = () => {
        dispatch( onCloseDateModal() );
    }

    return {
        // Properties
        isModalOpen,

        // Methods
        openModal,
        closeModal
    }
}
