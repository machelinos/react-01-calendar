import { useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';

import { NavBar, CalendarEvent, CalendarModal } from "../"
import { getMessages, localizer } from '../../helpers';
import { useUiStore } from '../../hooks';

const events = [
  {
    title: 'Cumpleaños del jefe',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Hay que comprar el pastel',
    user: {
      _id: '123',
      name: 'Joy Marcelle'
    }
  }
]

export const CalendarPage = () => {

  const { openModal } = useUiStore();

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

    </>
  )
}
