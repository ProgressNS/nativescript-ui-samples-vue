import * as frameModule from 'tns-core-modules/ui/frame';
import { CalendarTransitionMode } from 'nativescript-ui-calendar';

const description = 'Transition modes';

export default {
  name: 'TransitionModes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
      <ActionItem text="None" android.position="popup" @tap="onNoneTap"></ActionItem>
      <ActionItem text="Slide" android.position="popup" @tap="onSlideTap"></ActionItem>
      <ActionItem text="Stack" android.position="popup" @tap="onStackTap"></ActionItem>
      <ActionItem text="Plain" android.position="popup" @tap="onPlainTap"></ActionItem>
      <ActionItem text="Free" android.position="popup" @tap="onFreeTap"></ActionItem>
      <ActionItem text="Combo" android.position="popup" @tap="onComboTap"></ActionItem>
      <ActionItem text="Overlap" android.position="popup" @tap="onOverlapTap"></ActionItem>
    </ActionBar>
    <StackLayout>
      <RadCalendar
        :transitionMode="transitionMode">
      </RadCalendar>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      transitionMode: CalendarTransitionMode.None,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onNoneTap() {
      this.transitionMode = CalendarTransitionMode.None;
    },
    onSlideTap() {
      this.transitionMode = CalendarTransitionMode.Slide;
    },
    onStackTap() {
      this.transitionMode = CalendarTransitionMode.Stack;
    },
    onPlainTap() {
      this.transitionMode = CalendarTransitionMode.Plain;
    },
    onComboTap() {
      this.transitionMode = CalendarTransitionMode.Combo;
    },
    onOverlapTap() {
      this.transitionMode = CalendarTransitionMode.Overlap;
    },
  },
};
