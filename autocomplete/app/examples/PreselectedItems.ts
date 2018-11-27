import * as frameModule from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { TokenModel } from 'nativescript-ui-autocomplete';
import { getCountriesCount, getCountry } from '../data';

const description = 'Preselected Items';

export default {
  name: 'PreselectedItems',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <Label text="Select country"></Label>
      <RadAutoCompleteTextView ref="autocomplete"
                               suggestMode="Suggest"
                               displayMode="Tokens"
                               :items="dataItems"
                               @loaded="onLoaded">
        <SuggestionView ~suggestionView suggestionViewHeight="300">
          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
            <v-template>
              <StackLayout orientation="horizontal">
                <Image :src="item.image" width="50"></Image>
                <Label :text="item.text" marginLeft="5" android:marginTop="15"></Label>
              </StackLayout>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
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
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onLoaded ({ object }) {
      object.addToken(
        this.dataItems.getItem(0)
      );
      object.addToken(
        this.dataItems.getItem(1)
      );
    },
  },
};
