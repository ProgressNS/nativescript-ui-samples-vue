import { Frame } from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { AutoCompleteLayoutMode, TokenModel } from 'nativescript-ui-autocomplete';
import { getCountriesCount, getCountry } from '../data';

const description = 'Horizontal';

export default {
  name: 'Horizontal',
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
                               :layoutMode="layoutMode"
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
        <GridLayout rows="auto, auto">
          <Label row="0" text="For testing purposes:"></Label>
          <Button row="1" margin="5" text="Add next token" @tap="onAddToken"></Button>
        </GridLayout>
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
      layoutMode: AutoCompleteLayoutMode.Horizontal,
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onAddToken() {
      if (this.dataItems.length <= this.lastIndex) {
        this.lastIndex = 0;
      }

      this.$refs.autocomplete.addToken(
        this.dataItems.getItem(this.lastIndex)
      );
      this.lastIndex++;
    }
  },
  created () {
    this.lastIndex = 0;
  },
};
