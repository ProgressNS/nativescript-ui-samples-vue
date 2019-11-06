import { Frame } from 'tns-core-modules/ui/frame';

const description = 'Getting Started';
// >> calendar-gettingstarted-vue
export default {
  name: 'GettingStarted',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCalendar></RadCalendar>
  </Page>
  `,
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  },
  data () {
    return {
      title: description
    };
  },
};
// << calendar-gettingstarted-vue