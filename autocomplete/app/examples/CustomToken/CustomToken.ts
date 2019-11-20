import { Frame } from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { AutoCompleteEventData } from 'nativescript-ui-autocomplete';
import { CityModel } from './city';
import { default as data } from "./cities";

const description = 'Custom Token Model ';

export default {
  name: 'Custom Token Model',
  description: description,
  // >> autocomplete-custom-tokens-template-vue
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout ios:backgroundColor="#CDCECE" padding="5">
      <Label text="Type city or country name:"></Label>
      <RadAutoCompleteTextView ref="autocomplete"
        @tokenAdded="onTokenAdded" @tokenRemoved="onTokenRemoved"
        @tokenSelected="onTokenSelected" @tokenDeselected="onTokenDeselected"
        :items="dataItems" noResultsText="Nothing found!"
        completionMode="Contains" suggestMode="Suggest" displayMode="Tokens">
        <SuggestionView ~suggestionView>
          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
            <v-template>
              <GridLayout columns="auto, *">
                <Image :src="item.image" marginLeft="10" width="50" verticalAlignment="center"></Image>
                <Label :text="item.city" marginLeft="10" col="1" verticalAlignment="center"></Label>
                <Label :text="item.country" marginRight="10" col="1" verticalAlignment="center" textAlignment="right"></Label>
              </GridLayout>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
    </StackLayout>
  </Page>
  `,
  // << autocomplete-custom-tokens-template-vue
  data () {
    // >> autocomplete-custom-tokens-items-ts-vue
    let dataItems = new ObservableArray<CityModel>();

    for (let i = 0; i < data.items.length; i++) {
        const d = data.items[i].flag;
        const ds = "res://" + d;
        dataItems.push(new CityModel(data.items[i].id, data.items[i].city, data.items[i].country, ds));
    }
    // << autocomplete-custom-tokens-items-ts-vue

    return {
      title: description,
      dataItems: dataItems
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onTokenAdded(args: AutoCompleteEventData) {
        console.log("Added Token: " + args.token);
    },
    onTokenRemoved(args: AutoCompleteEventData) {
        console.log("Removed Token: " + args.token);
    },
    onTokenSelected(args: AutoCompleteEventData) {
        console.log("Selected Token: " + args.token);
    },
    onTokenDeselected(args: AutoCompleteEventData) {
        console.log("Deselected Token: " + args.token);
    }
  },
};
