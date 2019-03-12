import * as frameModule from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { AutoCompleteCompletionMode, AutoCompleteDisplayMode, AutoCompleteSuggestMode } from 'nativescript-ui-autocomplete';
import { getCountry, getCountriesCount, getCountryWithImage } from '../data';

const description = 'Getting Started';

export default {
  name: 'GettingStarted',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout ios:backgroundColor="#CDCECE" padding="5">
      <Label text="Select country"></Label>
      <RadAutoCompleteTextView ref="autocomplete"
                               :completionMode="completionMode"
                               :suggestMode="suggestMode"
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
      <Label text="SUGGEST MODES" marginTop="5"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Suggest" @tap="onSuggestSelected()"></Button>
        <Button margin="5" text="Append" @tap="onAppendSelected()"></Button>
        <Button margin="5" text="Suggest-Append" @tap="onSuggestAppendSelected()"></Button>
      </StackLayout>
      <Label text="COMPLETION MODES"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="StartsWith" @tap="onStartsWithSelected()"></Button>
        <Button margin="5" text="Contains" @tap="onContainsSelected()"></Button>
      </StackLayout>
      <Label text="DISPLAY MODES"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Plain" @tap="onPlainSelected()"></Button>
        <Button margin="5" text="Tokens" @tap="onTokensSelected()"></Button>
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
      displayMode: AutoCompleteDisplayMode.Tokens,
      suggestMode: AutoCompleteSuggestMode.Suggest,
      completionMode: AutoCompleteCompletionMode.StartsWith,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onSuggestSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.Suggest;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onAppendSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.Append;
      this.completionMode = AutoCompleteCompletionMode.StartsWith;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onSuggestAppendSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.SuggestAppend;
      this.completionMode = AutoCompleteCompletionMode.StartsWith;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onStartsWithSelected(args) {
      this.completionMode = AutoCompleteCompletionMode.StartsWith;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onContainsSelected(args) {
      this.completionMode = AutoCompleteCompletionMode.Contains;
      this.suggestMode = AutoCompleteSuggestMode.Suggest;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onPlainSelected(args) {
      this.displayMode = AutoCompleteDisplayMode.Plain;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onTokensSelected(args) {
      this.displayMode = AutoCompleteDisplayMode.Tokens;
      this.$refs.autocomplete.resetAutoComplete();
    },
  },
};
