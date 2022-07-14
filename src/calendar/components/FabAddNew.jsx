import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {

    const { openModal } = useUiStore();
    const { selectActiveEvent } = useCalendarStore();

    const handleButtonClick = () => {
        selectActiveEvent({
            title: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            notes: '',
            user: {
              _id: '123',
              name: 'Joy Marcelle'
            }
        
        })
        openModal();
    }

    return (
    <button
        className="btn btn-primary fab"
        onClick={ handleButtonClick }
    >
        <i className="fas fa-plus"></i>
    </button>
    )
}
