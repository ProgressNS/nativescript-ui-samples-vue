import * as frameModule from 'tns-core-modules/ui/frame';
import { CalendarSelectionMode } from 'nativescript-ui-calendar';

const description = 'Selection modes';

export default {
  name: 'SelectionModes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
      <ActionItem text="None" android.position="popup" @tap="onNoneTap"></ActionItem>
      <ActionItem text="Single" android.position="popup" @tap="onSingleTap"></ActionItem>
      <ActionItem text="Multiple" android.position="popup" @tap="onMultipleTap"></ActionItem>
      <ActionItem text="Range" android.position="popup" @tap="onRangeTap"></ActionItem>
    </ActionBar>
    <StackLayout>
      <RadCalendar
        :selectionMode="selectionMode">
      </RadCalendar>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      selectionMode: CalendarSelectionMode.None,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onNoneTap() {
      this.selectionMode = CalendarSelectionMode.None;
    },
    onSingleTap() {
      this.selectionMode = CalendarSelectionMode.Single;
    },
    onMultipleTap() {
      this.selectionMode = CalendarSelectionMode.Multiple;
    },
    onRangeTap() {
      this.selectionMode = CalendarSelectionMode.Range;
    },
  },
};
