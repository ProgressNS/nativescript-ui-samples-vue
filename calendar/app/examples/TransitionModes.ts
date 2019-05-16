import * as frameModule from 'tns-core-modules/ui/frame';
// >> calendar-transitionmodes-vue
import { CalendarTransitionMode } from 'nativescript-ui-calendar';
import { isAndroid } from 'tns-core-modules/platform';
const description = 'Transition modes';

export default {
  name: 'TransitionModes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout orientation="vertical" rows="*, auto, auto">
      <RadCalendar
        :transitionMode="transitionMode">
      </RadCalendar>
      <StackLayout row="1" orientation="horizontal" class="m-10">
        <Button text="None"  @tap="onNoneTap"></Button>
        <Button text="Slide"  @tap="onSlideTap"></Button>
        <Button text="Stack"  @tap="onStackTap"></Button>
      </StackLayout>
      <StackLayout v-show="isAndroid" row="2" orientation="horizontal" class="m-10">
        <Button text="Plain"  @tap="onPlainTap"></Button>
        <Button text="Free"  @tap="onFreeTap"></Button>
        <Button text="Combo"  @tap="onComboTap"></Button>
        <Button text="Overlap"  @tap="onOverlapTap"></Button>
      </StackLayout>
      <StackLayout v-show="!isAndroid" row="2" orientation="horizontal" class="m-10">
        <Button text="Flip"  @tap="onFlipTap"></Button>
        <Button text="Fold"  @tap="onFoldTap"></Button>
        <Button text="Float"  @tap="onFloatTap"></Button>
        <Button text="Rotate"  @tap="onRotateTap"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      transitionMode: CalendarTransitionMode.None,
      title: description,
      isAndroid: isAndroid
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
    // android
    onPlainTap() {
      this.transitionMode = CalendarTransitionMode.Plain;
    },
    onComboTap() {
      this.transitionMode = CalendarTransitionMode.Combo;
    },
    onOverlapTap() {
      this.transitionMode = CalendarTransitionMode.Overlap;
    },
    onFreeTap() {
        this._transitionMode = CalendarTransitionMode.Free;
    },
    // ios
    onFlipTap() {
        this._transitionMode = CalendarTransitionMode.Flip;
    },
    onFoldTap() {
        this._transitionMode = CalendarTransitionMode.Fold;
    },
    onFloatTap() {
        this._transitionMode = CalendarTransitionMode.Float;
    },
    onRotateTap() {
        this._transitionMode = CalendarTransitionMode.Rotate;
    }
  },
};
// << calendar-transitionmodes-vue