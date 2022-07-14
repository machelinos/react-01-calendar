import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onEditEvent, onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state=>state.calendar);

    const selectActiveEvent = (calendarEvent)=>{
        dispatch( onSetActiveEvent(calendarEvent) );
    }

    const startSavingEvent = async (calendarEvent) => {
        // TO DO: go to backend and get event

        if(calendarEvent._id){
            // Updating event
            dispatch( onEditEvent(calendarEvent));
        } else {
            // Creating new event
            // _id should be coming in event from backend, should delete this temporal _id arg once backend connected
            dispatch ( onAddNewEvent({...calendarEvent, _id: new Date().getTime()}) );
        }

    }

    const startDeletingEvent = async () => {
        if(activeEvent){
            dispatch(onDeleteEvent());
        }
    }

    return {
        // Properties
        activeEvent,
        events,
        isAnyEventActive: !!activeEvent,

        // Methods
        selectActiveEvent,
        startDeletingEvent,
        startSavingEvent
    }
}
