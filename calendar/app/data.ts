import { Color } from 'tns-core-modules/color';
import { CalendarEvent } from 'nativescript-ui-calendar';

export const getEvents = (count: Number) => {
  let now = new Date();
  let startDate: Date,
      endDate: Date,
      event: CalendarEvent;
  let colors: Array<Color> = [
    new Color(200, 188, 26, 214),
    new Color(220, 255, 109, 130),
    new Color(255, 55, 45, 255),
    new Color(199, 17, 227, 10),
    new Color(255, 255, 54, 3),
  ];
  let events: Array<CalendarEvent> = new Array<CalendarEvent>();
  for (let i = 1; i < count; i++) {
    startDate = new Date(
      now.getFullYear(), now.getMonth(), i * 2, 1
    );
    endDate = new Date(
      now.getFullYear(), now.getMonth(), (i * 2), 3
    );
    event = new CalendarEvent(
      `event ${i}`, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]
    );
    events.push(event);
    if (i % 3 === 0) {
        const event = new CalendarEvent(`second ${i}`, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
        events.push(event);
    }
  }
  return events;
};

export function getCalendarDayEvents(): Array<CalendarEvent> {
  const eventTitles: Array<string> = ["Meeting with Jack", "Lunch with Peter", "Planning meeting",
      "Go shopping", "Very important meeting", "Another meeting"];
  const eventColors: Array<Color> = [new Color("#0288D1"), new Color("#009688"), new Color("#E040FB")];

  const events: Array<CalendarEvent> = new Array<CalendarEvent>();
  const now: Date = new Date();
  const startDate: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endDate: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  startDate.setHours(9);
  endDate.setHours(10);
  let event = new CalendarEvent(eventTitles[0], startDate, endDate, false, eventColors[0]);
  events.push(event);

  startDate.setHours(12);
  endDate.setHours(13);
  event = new CalendarEvent(eventTitles[1], startDate, endDate, false, eventColors[1]);
  events.push(event);

  startDate.setHours(13);
  endDate.setHours(14);
  event = new CalendarEvent(eventTitles[2], startDate, endDate, false, eventColors[0]);
  events.push(event);

  startDate.setHours(20);
  endDate.setHours(22);
  event = new CalendarEvent(eventTitles[3], startDate, endDate, false, eventColors[2]);
  events.push(event);

  startDate.setHours(2);
  endDate.setHours(4);
  event = new CalendarEvent(eventTitles[4], startDate, endDate, false, eventColors[0]);
  events.push(event);

  startDate.setHours(16);
  endDate.setHours(17);
  event = new CalendarEvent(eventTitles[5], startDate, endDate, false, eventColors[0]);
  events.push(event);

  return events;
}
