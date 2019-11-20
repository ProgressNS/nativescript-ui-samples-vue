import { Frame } from 'tns-core-modules/ui/frame';
// >> calendar-selectionmode-vue
import { CalendarSelectionMode } from 'nativescript-ui-calendar';

const description = 'Selection modes';

export default {
  name: 'SelectionModes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>=
    </ActionBar>
    <GridLayout orientation="vertical" rows="*, auto">
      <RadCalendar
        :selectionMode="selectionMode">
      </RadCalendar>
      <StackLayout orientation="horizontal" row="1" class="m-10">
        <Button text="None" @tap="onNoneTap"></Button>
        <Button text="Single" @tap="onSingleTap"></Button>
        <Button text="Multiple" @tap="onMultipleTap"></Button>
        <Button text="Range" @tap="onRangeTap"></Button>
      </StackLayout>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      selectionMode: CalendarSelectionMode.None,
      title: description
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
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
// << calendar-selectionmode-vue