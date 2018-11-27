import * as frameModule from 'tns-core-modules/ui/frame';
import { getEvents } from '../data';

const description = 'Day View';

export default {
  name: 'DayView',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadCalendar
        :eventSource="events"
        @dayViewEventSelected="onDayViewEventSelected"
        viewMode="Day">
      </RadCalendar>
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
    onDayViewEventSelected({ eventData }) {
      alert({
        title: 'Event Selected',
        message: eventData.title,
        okButtonText: 'OK'
      });
    },
  }
};
