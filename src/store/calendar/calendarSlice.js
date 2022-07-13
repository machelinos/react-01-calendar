import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent =   {
    _id: new Date().getTime(),
    title: 'Cumpleaños del jefe',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Hay que comprar el pastel',
    user: {
      _id: '123',
      name: 'Joy Marcelle'
    }
  }


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [ tempEvent ],
        activeEvent: null
    },
    reducers: {
      onSetActiveEvent: (state, { payload }) => {
        state.activeEvent = {...payload};
      }
    }
});

export const { onSetActiveEvent } = calendarSlice.actions;
