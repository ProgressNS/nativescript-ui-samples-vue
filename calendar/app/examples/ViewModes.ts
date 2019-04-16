import * as frameModule from 'tns-core-modules/ui/frame';
// >> calendar-viewmodes-vue
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
    </ActionBar>
    <GridLayout orientation="vertical" rows="*, auto">
    <RadCalendar
        :eventSource="events"
        :viewMode="viewMode">
      </RadCalendar>
      <StackLayout row="1" orientation="horizontal">
        <Button text="Week" @tap="onWeekTap"></Button>
        <Button text="Month"  @tap="onMonthTap"></Button>
        <Button text="Month names"  @tap="onMonthNamesTap"></Button>
        <Button text="Year"  @tap="onYearTap"></Button>
        <Button text="Day"  @tap="onDayTap"></Button>
      <StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      events: getEvents(10),
      viewMode: CalendarViewMode.Month,
      title: description
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
// << calendar-viewmodes-vue