import { Frame } from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { AutoCompleteDisplayMode, TokenModel } from 'nativescript-ui-autocomplete';
import { getCountry, getCountriesCount, getCountryWithImage } from '../data';
import { default as data } from "./countries";

const description = 'Customization';

export default {
  name: 'Customization',
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
              <GridLayout columns="auto, *">
                  <Image :src="item.image" width="50"></Image>
                  <Label :text="item.text" marginLeft="5" android:marginTop="15" col="1"></Label>
              </GridLayout>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
      <Label text="For testing"></Label>
      <TextView automationText="testing" hint="For testing"/>
    </StackLayout>
  </Page>
  `,
  data () {
    let dataItems = new ObservableArray<TokenModel>();

    for (let i = 0; i < data.items.length; i++) {
        const d = data.items[i].flag;
        const ds = "res://" + d;
        dataItems.push(new TokenModel(data.items[i].country, ds));
    }

    return {
      title: description,
      dataItems: dataItems,
      displayMode: AutoCompleteDisplayMode.Tokens
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    }
  },
};
