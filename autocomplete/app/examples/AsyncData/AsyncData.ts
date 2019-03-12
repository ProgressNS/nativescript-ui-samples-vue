import * as frameModule from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { TokenModel } from 'nativescript-ui-autocomplete';
import * as http from 'tns-core-modules/http';

const description = 'Async Data Fetch';

export default {
  name: 'AsyncData',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout ios:backgroundColor="#CDCECE" padding="5">
      <Label text="Select airport"></Label>
      <RadAutoCompleteTextView ref="autocomplete"
                               displayMode="plain"
                               suggestMode="Suggest"
                               :items="dataItems">
        <SuggestionView ~suggestionView suggestionViewHeight="300">
          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
            <v-template>
              <Label :text="item.text"></Label>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      dataItems: new ObservableArray(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
  mounted () {
    const jsonUrl = 'https://raw.githubusercontent.com/telerik/nativescript-ui-samples/master/examples-data/airports.json';

    this.$refs.autocomplete.setLoadSuggestionsAsync((text) => {
      const promise = new Promise((resolve, reject) => {
          http.getJSON(jsonUrl).then((r: any) => {
              const airportsCollection = r.airports;
              const items: Array<TokenModel> = new Array();
              for (let i = 0; i < airportsCollection.length; i++) {
                  items.push(new TokenModel(airportsCollection[i].FIELD2, null));
              }
              resolve(items);
          }).catch((err) => {
              const message = `Error fetching remote data from ${jsonUrl}: ${err.message}`;
              console.log(message);
              alert(message);
              reject();
          });
      });

      return promise;
    });
  },
};
