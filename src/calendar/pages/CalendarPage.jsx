import { useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { NavBar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../"
import { getMessages, localizer } from '../../helpers';
import { useUiStore, useCalendarStore } from '../../hooks';

export const CalendarPage = () => {

  const { openModal } = useUiStore();

  const { events, selectActiveEvent } = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView')||'month');

  const eventStyleGetter = (event, start, end, isSelected ) => {
    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const onDoubleClick = ( event ) => {
    openModal();
  }

  const onSelect = ( event ) => {
    console.log({click: event});
    selectActiveEvent(event);
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  }

  return (
    <>
      <NavBar />

      <Calendar
      components={ {
        event: CalendarEvent
      } }
      defaultView={lastView}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={ getMessages() }
      eventPropGetter={eventStyleGetter }
      onDoubleClickEvent = { onDoubleClick }
      onSelectEvent = { onSelect }
      onView = { onViewChanged }
      />

      <CalendarModal />

      <FabAddNew />

      <FabDelete />

    </>
  )
}
