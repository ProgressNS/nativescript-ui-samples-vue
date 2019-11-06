import { Frame } from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { AutoCompleteCompletionMode, AutoCompleteDisplayMode, AutoCompleteSuggestMode } from 'nativescript-ui-autocomplete';
import { getCountry, getCountriesCount, getCountryWithImage } from '../data';

const description = 'Hint';

export default {
  name: 'Hint',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout ios:backgroundColor="#CDCECE" padding="5">
      <RadAutoCompleteTextView ref="autocomplete"
                               hint="select country"
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
      displayMode: AutoCompleteDisplayMode.Tokens,
      suggestMode: AutoCompleteSuggestMode.Suggest,
      completionMode: AutoCompleteCompletionMode.StartsWith,
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onSuggestSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.Suggest;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onAppendSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.Append;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onSuggestAppendSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.SuggestAppend;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onStartsWithSelected(args) {
      this.completionMode = AutoCompleteCompletionMode.StartsWith;
      this.$refs.autocomplete.resetAutoComplete();
    },
    onContainsSelected(args) {
      this.completionMode = AutoCompleteCompletionMode.Contains;
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
