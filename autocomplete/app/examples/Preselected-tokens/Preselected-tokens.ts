import * as frameModule from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { TokenModel } from 'nativescript-ui-autocomplete';
import { getCountriesCount, getCountry } from '../data';

const description = 'Preselected tokens';

export default {
  name: 'Preselected tokens',
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
                               layoutMode="Wrap"
                               :items="dataItems"
                               @loaded="onLoaded">
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
      <StackLayout>
        <Button row="1" margin="5" text="Add next token" @tap="onAddToken"></Button>
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
      dataItems: dataItems
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onAddToken() {
      if (this.dataItems.length <= this.lastIndex) {
        this.lastIndex = 0;
      }

      this.$refs.autocomplete.addToken(
        this.dataItems.getItem(this.lastIndex)
      );
      this.lastIndex++;
    },
    onLoaded({object}) {
      object.addToken(this.dataItems.getItem(0));
      object.addToken(this.dataItems.getItem(1));
      object.addToken(this.dataItems.getItem(2));
      this.lastIndex = 3;
      this.isLoaded = true;
    }
  },
  created () {
    this.lastIndex = 0;
  },
};
