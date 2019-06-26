import * as frameModule from 'tns-core-modules/ui/frame';
import { RadCalendar, CalendarEvent, CalendarCellTapEventData } from "nativescript-ui-calendar";
import { getCalendarCustomEvents } from '../data';

const description = 'Custom events';

export default {
  name: 'CustomEvents',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="*, 140">
        <RadCalendar :eventSource="eventSource" @cellTap="onCellTap"></RadCalendar>
        <ListView for="item in myItems" row="1" >
            <v-template>
                <GridLayout columns="auto, auto, *, auto" rows="auto,auto" style="padding: 12">
                    <Label :text="'id: ' + item.id" col="0" rowSpan="2"
                        style="margin: 0 6; min-width: 36; vertical-align: center;">
                    </Label>
                    <Label :backgroundColor="item.eventColor" col="1" rowSpan="2"
                        style="margin: 0 6; width: 15; height: 15; border-radius: 10; vertical-align: center;">
                    </Label>
                    <Label :text="'what: ' + item.title" col="2"
                        style="margin: 0 6; font-size: 20;">
                    </Label>
                    <Label :text="'where: ' + item.location" row="1" col="2"
                        style="margin: 0 6; opacity: 0.5;">
                    </Label>
                    <Label :text="'when: ' + item.formattedTime" col="3" rowSpan="2"
                        style="margin: 0 6; vertical-align: center;">
                    </Label>
                </GridLayout>
            </v-template>
        </ListView>
    </GridLayout>
  </Page>
  `,
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onCellTap(args: CalendarCellTapEventData) {
        const calendar: RadCalendar = args.object;
        const date: Date = args.date;
        const events: Array<CalendarEvent> = calendar.getEventsForDate(date);
        this.myItems = events;
    }
  },
  data () {
    return {
      eventSource: getCalendarCustomEvents(),
      title: description,
      myItems: null
    };
  }
};