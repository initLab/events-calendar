import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useEvents from './useEvents.js';

const mLocalizer = momentLocalizer(moment);

function App() {
    const events = useEvents(import.meta.env.EVENTS_URL);

    function handleSelectEvent(event) {
        window.open(event.url);
    }

    return (<div style={{
        height: '100vh',
    }}>
        <Calendar localizer={mLocalizer} events={events} titleAccessor="summary" tooltipAccessor="description"
            onSelectEvent={handleSelectEvent} />
    </div>);
}

export default App;
