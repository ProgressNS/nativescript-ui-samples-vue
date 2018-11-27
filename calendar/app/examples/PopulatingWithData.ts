import * as frameModule from 'tns-core-modules/ui/frame';
import { getEvents } from '../data';

const description = 'Populating With Data';

export default {
  name: 'PopulatingWithData',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadCalendar
        :eventSource="events"></RadCalendar>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      events: getEvents(10),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
