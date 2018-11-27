import * as frameModule from 'tns-core-modules/ui/frame';
import { CalendarEventsViewMode } from 'nativescript-ui-calendar';
import { getEvents } from '../data';

const description = 'Events view modes';

export default {
  name: 'EventsViewModes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
      <ActionItem text="None" android.position="popup" @tap="onNoneTap"></ActionItem>
      <ActionItem text="Inline" android.position="popup" @tap="onInlineTap"></ActionItem>
      <ActionItem text="Popover" android.position="popup" @tap="onPopoverTap"></ActionItem>
    </ActionBar>
    <StackLayout>
      <RadCalendar
        :eventSource="events"
        :eventsViewMode="eventsViewMode">
      </RadCalendar>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      events: getEvents(10),
      eventsViewMode: CalendarEventsViewMode.None,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onNoneTap() {
      this.eventsViewMode = CalendarEventsViewMode.None;
    },
    onInlineTap() {
      this.eventsViewMode = CalendarEventsViewMode.Inline;
    },
    onPopoverTap() {
      this.eventsViewMode = CalendarEventsViewMode.Popover;
    },
  },
};
