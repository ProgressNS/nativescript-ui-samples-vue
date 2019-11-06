import { Frame } from 'tns-core-modules/ui/frame';

const description = 'Programmatic control';

export default {
  name: 'ProgrammaticControl',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout
      orientation="vertical" rows="*, auto">
      <RadCalendar ref="calendar"></RadCalendar>
      <StackLayout row="1">
        <Button text="Next month" @tap="onNavigateForwardTap"></Button>
        <Button text="Prev month" @tap="onNavigateBackTap"></Button>
        <Button text="Today" @tap="onGoToDateTap"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onNavigateForwardTap() {
      this.$refs.calendar.navigateForward();
    },
    onNavigateBackTap() {
      this.$refs.calendar.navigateBack();
    },
    onGoToDateTap() {
      const date = new Date();
      this.$refs.calendar.goToDate(date);
    },
  },
  data () {
    return {
      title: description
    };
  }
};
