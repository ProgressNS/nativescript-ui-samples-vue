import * as frameModule from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { AutoCompleteCompletionMode, AutoCompleteDisplayMode } from 'nativescript-ui-autocomplete';
import { getCountry, getCountriesCount } from '../data';
import DisplayModes from '~/examples/Display-modes/Display-modes';

const description = 'Tokens';

export default {
  name: 'Tokens',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout ios:backgroundColor="#CDCECE" padding="5">
      <Label text="Select country"></Label>
      <RadAutoCompleteTextView ref="autocomplete"
                               :displayMode="displayMode"
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
      completionMode: AutoCompleteCompletionMode.Contains,
      displayMode: AutoCompleteDisplayMode.Tokens
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    }
  }
};
