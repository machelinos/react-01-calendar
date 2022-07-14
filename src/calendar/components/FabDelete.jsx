import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {
    const { startDeletingEvent, isAnyEventActive, activeEvent } = useCalendarStore();

    const handleButtonClick = () => {
        startDeletingEvent();
    }

    return (
    <button
        className="btn btn-danger fab fab--delete"
        onClick={ handleButtonClick }
        style={{
            display: isAnyEventActive && activeEvent._id ? '':'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
    )
}
