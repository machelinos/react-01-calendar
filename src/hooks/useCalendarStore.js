import { useDispatch, useSelector } from "react-redux";

export const useCalendarStore = () => {
    const {events} = useSelector(state=>state.calendar);


    return {
        // Properties
        events,

        // Methods
    }
}
