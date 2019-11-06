import { Frame } from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
// >> autocomplete-events-vue
import { RadAutoCompleteTextView } from 'nativescript-ui-autocomplete';
import { getCountriesCount, getCountry } from '../data';

const description = 'Events';

export default {
  name: 'Events',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout ios:backgroundColor="#CDCECE" padding="5">
      <Label text="Select country"></Label>
      <RadAutoCompleteTextView ref="autocomplete"
                               suggestMode="Suggest"
                               displayMode="Tokens"
                               :items="dataItems"
                               @suggestionViewBecameVisible="onSuggestionViewBecameVisible"
                               @didAutoComplete="onDidAutoComplete"
                               @textChanged="onTextChanged"
                               @tokenAdded="onTokenAdded"
                               @tokenRemoved="onTokenRemoved"
                               @tokenSelected="onTokenSelected"
                               @tokenDeselected="onTokenDeselected">
        <SuggestionView ~suggestionView suggestionViewHeight="300">
          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
            <v-template>
              <StackLayout orientation="vertical">
                <Label :text="item.text" marginLeft="5" android:marginTop="15"></Label>
              </StackLayout>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>

      <StackLayout orientation="vertical" marginTop="5">
        <Label marginBottom="12" :text="eventsText"></Label>
        <Label :text="eventName1"></Label>
        <Label :text="eventName2"></Label>
        <Label :text="eventName3"></Label>
        <Label :text="eventName4"></Label>
        <Label :text="eventName5"></Label>
      </StackLayout>

    </StackLayout>
  </Page>
  `,
  data () {
    let dataItems = new ObservableArray();

    for (let i = 0; i < getCountriesCount(); i++) {
      dataItems.push(getCountry(i));
    }
    return {
      title: description,
      dataItems: dataItems,
      eventsText: '',
      eventName1: '',
      eventName2: '',
      eventName3: '',
      eventName4: '',
      eventName5: '',
      currentEventNumber: 0,
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onTokenAdded({ token }) {
      this.logEvent(`Added Token: ${token.text}`);
    },
    onTokenRemoved({ token }) {
      this.logEvent(`Removed Token: ${token.text}`);
    },
    onTokenSelected({ token }) {
      this.logEvent(`Selected Token: ${token.text}`);
    },
    onTokenDeselected({ token }) {
      this.logEvent(`Deselected Token: ${token.text}`);
    },
    onDidAutoComplete({ text }) {
      this.logEvent(`DidAutoComplete with text: ${text}`);
    },
    onTextChanged({ text }) {
      this.logEvent(`Text Changed: ${text}`);
    },
    onSuggestionViewBecameVisible({ object }) {
      let autoComplete: RadAutoCompleteTextView = object;
      let numberOfItems = autoComplete.filteredItems.length;
      let eventText = `${numberOfItems} Suggestions Visible`;
      if (numberOfItems > 0) {
          eventText += ' - First is ' + autoComplete.filteredItems[0].text;
      }
      this.logEvent(eventText);
    },
    logEvent(eventText: string) {
      this.currentEventNumber++;
      this.updateEventsText();

      switch (this.currentEventNumber) {
        case 1: this.eventName1 = eventText; return;
        case 2: this.eventName2 = eventText; return;
        case 3: this.eventName3 = eventText; return;
        case 4: this.eventName4 = eventText; return;
        case 5: this.eventName5 = eventText; return;
        default:
          this.eventName1 = this.eventName2;
          this.eventName2 = this.eventName3;
          this.eventName3 = this.eventName4;
          this.eventName4 = this.eventName5;
          this.eventName5 = eventText;
      }
    },
    updateEventsText(): void {
      let text;
      if (this.currentEventNumber > 5) {
          text = "Latest 5 fired events:";
      } else if (this.currentEventNumber === 0) {
          text = "Events will appear here:";
      } else if (this.currentEventNumber === 1) {
          text = "Fired event:";
      } else {
          text = "Fired events:";
      }
      this.eventsText = text;
    },
  },
};
// << autocomplete-events-vue