import * as frameModule from 'tns-core-modules/ui/frame';
// >> calendar-events-view-modes-vue
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
    </ActionBar>
    <GridLayout orientation="vertical" rows="*, auto">
      <RadCalendar
        :eventSource="events"
        :eventsViewMode="eventsViewMode">
      </RadCalendar>
      <StackLayout row="1" orientation="horizontal" class="m-10">
        <Button text="None"  @tap="onNoneTap"></Button>
        <Button text="Inline"  @tap="onInlineTap"></Button>
        <Button text="Popover" @tap="onPopoverTap"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      events: getEvents(10),
      eventsViewMode: CalendarEventsViewMode.None,
      title: description
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
// << calendar-events-view-modes-vue