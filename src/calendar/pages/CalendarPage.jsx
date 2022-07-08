import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';

import { NavBar, CalendarEvent } from "../"
import { getMessages, localizer } from '../../helpers';

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

  return (
    <>
      <NavBar />

      <Calendar
      components={ {
        event: CalendarEvent
      } }
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={ getMessages() }
      eventPropGetter={eventStyleGetter }
      />

    </>
  )
}
