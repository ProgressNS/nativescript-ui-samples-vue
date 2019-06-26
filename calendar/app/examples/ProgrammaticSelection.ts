import * as frameModule from 'tns-core-modules/ui/frame';
import { RadCalendar, CalendarSelectionMode, DateRange } from "nativescript-ui-calendar";

const description = 'Programmatic selection';

export default {
  name: 'ProgrammaticControl',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto,auto,*" columns="*,*,*">
        <Button text="single" @tap="onSingleSelectionTap"></Button>
        <Button text="multiple" @tap="onMultipleSelectionTap" col="1"></Button>
        <Button text="range" @tap="onRangeSelectionTap" col="2"></Button>
        <Button text="clear selection" @tap="onClearSelectionTap" row="1" colSpan="3"></Button>
        <RadCalendar ref="calendar" row="2" selectionMode="Single" colSpan="3"></RadCalendar>
</GridLayout>
  </Page>
  `,
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    // >> calendar-programmatic-selection-vue
    onSingleSelectionTap() {
      this.$refs.calendar.nativeView.selectionMode = CalendarSelectionMode.Single;
      let selectedDate = this.dateTomorrow();
      this.$refs.calendar.nativeView.selectedDate = selectedDate;
    },
    onMultipleSelectionTap() {
        this.$refs.calendar.nativeView.selectionMode = CalendarSelectionMode.Multiple;
        let firstSelectedDate = this.dateTomorrow();
        let secondSelectedDate = this.dateNextWeek();
        this.$refs.calendar.nativeView.selectedDates = [firstSelectedDate, secondSelectedDate];
    },
    onRangeSelectionTap() {
        this.$refs.calendar.nativeView.selectionMode = CalendarSelectionMode.Range;
        let firstSelectedDate = this.dateTomorrow();
        let lastSelectedDate = this.dateNextWeek();
        this.$refs.calendar.nativeView.selectedDateRange = new DateRange(firstSelectedDate, lastSelectedDate);
    },
    onClearSelectionTap() {
        this.$refs.calendar.nativeView.clearSelection();
    },
    // << calendar-programmatic-selection-vue
    dateTomorrow(): Date {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    },
    dateNextWeek(): Date {
        let date = new Date();
        date.setDate(date.getDate() + 7);
        return date;
    }
  },
  data () {
    return {
      title: description
    };
  }
};
