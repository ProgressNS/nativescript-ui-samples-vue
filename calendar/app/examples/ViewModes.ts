import * as frameModule from 'tns-core-modules/ui/frame';
import { CalendarViewMode } from 'nativescript-ui-calendar';
import { getEvents } from '../data';

const description = 'View modes';

export default {
  name: 'ViewModes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
      <ActionItem text="Week" android.position="popup" @tap="onWeekTap"></ActionItem>
      <ActionItem text="Month" android.position="popup" @tap="onMonthTap"></ActionItem>
      <ActionItem text="Month Names" android.position="popup" @tap="onMonthNamesTap"></ActionItem>
      <ActionItem text="Year" android.position="popup" @tap="onYearTap"></ActionItem>
      <ActionItem text="Day" android.position="popup" @tap="onDayTap"></ActionItem>
    </ActionBar>
    <StackLayout>
      <RadCalendar
        :eventSource="events"
        :viewMode="viewMode">
      </RadCalendar>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      events: getEvents(10),
      viewMode: CalendarViewMode.Month,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onWeekTap() {
      this.viewMode = CalendarViewMode.Week;
    },
    onMonthTap() {
      this.viewMode = CalendarViewMode.Month;
    },
    onMonthNamesTap() {
      this.viewMode = CalendarViewMode.MonthNames;
    },
    onYearTap() {
      this.viewMode = CalendarViewMode.Year;
    },
    onDayTap() {
      this.viewMode = CalendarViewMode.Day;
    },
  },
};
