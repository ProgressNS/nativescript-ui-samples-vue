import { Frame } from 'tns-core-modules/ui/frame';
// >> calendar-populate-vue
import { getEvents } from '../data';

const description = 'Populating with data';

export default {
  name: 'PopulatingWithData',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout orientation="vertical" rows="*, 100">
      <RadCalendar row="0" ref="calendar"
        :eventSource="events" @dateSelected="onDateSelected">
      </RadCalendar>
      <StackLayout row="1">
        <ListView ref="listView"
                  for="item in myItems">
          <v-template>
              <Label class="titleLabel" :text="item.title">
              </Label>
          </v-template>
        </ListView>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      events: getEvents(10),
      title: description,
      myItems: ""
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onDateSelected(eventData) {
      this.myItems = this.$refs.calendar.nativeView.getEventsForDate(eventData.date);
    },
  },
};
// << calendar-populate-vue