import * as frameModule from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { TokenModel } from 'nativescript-ui-autocomplete';
import { getCountry, getCountriesCount } from '../data';

const description = 'Read Only';

export default {
  name: 'ReadOnly',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout ios:backgroundColor="#CDCECE" padding="5">
      <Label text="Select country (tokens mode)"></Label>
      <RadAutoCompleteTextView ref="autocomplete"
                               suggestMode="Suggest"
                               displayMode="Tokens"
                               :readOnly="readOnly"
                               :items="dataItems">
        <SuggestionView ~suggestionView suggestionViewHeight="300">
          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
            <v-template>
              <StackLayout orientation="horizontal">
                <Label :text="item.text" marginLeft="5" android:marginTop="15"></Label>
              </StackLayout>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
      <Label text="Select country (plain mode)"></Label>
      <RadAutoCompleteTextView ref="autocomplete"
                               suggestMode="Suggest"
                               displayMode="Plain"
                               :readOnly="readOnly"
                               :items="dataItems">
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

      <Label text="Read Only:" marginTop="5"></Label>
      <StackLayout orientation="horizontal">
          <Button margin="5" text="Set true" @tap="onSetTrue"></Button>
          <Button margin="5" text="Set false" @tap="onSetFalse"></Button>
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
      readOnly: false,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onSetTrue() {
      this.readOnly = true;
    },
    onSetFalse() {
      this.readOnly = false;
    },
  },
};
