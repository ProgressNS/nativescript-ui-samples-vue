import { Frame } from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { getCountry, getCountriesCount } from '../data';

const description = 'CSS';

export default {
  name: 'CSS',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout backgroundColor="#CDCECE" padding="5" @loaded="onLoaded">
      <RadAutoCompleteTextView automationText="ac1" class="ac1" :items="dataItems"></RadAutoCompleteTextView>
      <RadAutoCompleteTextView automationText="ac2" class="ac2" :items="dataItems"></RadAutoCompleteTextView>
      <RadAutoCompleteTextView automationText="ac3" class="ac3" :items="dataItems"></RadAutoCompleteTextView>
      <RadAutoCompleteTextView automationText="ac4" class="ac4" :items="dataItems"></RadAutoCompleteTextView>
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
      Frame.topmost().goBack();
    },
    onLoaded(args) {
      args.object.css = `
RadAutoCompleteTextView.ac1 {
  color:#303F9F;
  background: #00BCD4;
  padding: 8;
  margin: 10 10 5 10;
  border-width: 3;
  border-color: #303F9F;
  border-radius: 10;
  font-weight: bold;
  font-size: 20;
  display-mode: plain;
  completion-mode: contains;
}

RadAutoCompleteTextView.ac1:focus {
  color: #00BCD4;
  background: #303F9F;
  border-color: #303F9F;
}

RadAutoCompleteTextView.ac1 ClearButton{
  color: #00BCD4;
}

RadAutoCompleteTextView.ac1 SuggestionView {
  border-width: 3;
  border-color: #303F9F;
  border-radius: 10;
  background-color: white;
  height: 300;
}

RadAutoCompleteTextView.ac1 SuggestionView Label {
  border-width: 3;
  border-radius: 10;
  border-color: #00BCD4;
  color: #00BCD4;
  margin: 10;
  text-align: center;
  padding: 10;
  font-size: 20;
  vertical-align: center;
}

RadAutoCompleteTextView.ac2 {
  padding: 10;
  margin: 5 10;
  background: white;
  token-item-spacing: 12;
  display-mode: tokens;
  completion-mode: contains;
}

RadAutoCompleteTextView.ac2 Token {
  color: #AE28FF;
  border-width: 3;
  border-color: #E1BEE7;
  background: #E1BEE7;
  font-size: 16;
}

RadAutoCompleteTextView.ac2 Token:selected {
  border-color: #AE28FF;
  font-weight: bold;
  font-size: 15.5;
}

RadAutoCompleteTextView.ac2 Token TokenClearButton {
  padding: 12;
  background-image: url("res://clear");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24;
  width: 24;
}

RadAutoCompleteTextView.ac2 Token:selected TokenClearButton {
  background-image: url("res://clear_filled");
}

RadAutoCompleteTextView.ac2 ClearButton {
  background-image: url("res://clear");
  background-repeat: no-repeat;
  background-size: contain;
  height: 24;
  width: 24;
}

RadAutoCompleteTextView.ac3 {
  margin: 5 10;
  padding: 10;
  color: #00C147;
  background: white;
  token-item-spacing: 12;
  display-mode: tokens;
  layout-mode: horizontal;
}

RadAutoCompleteTextView.ac3 Token {
  color: #00C147;
  background: white;
  border-radius: 20;
  border-color: #00C147;
  border-width: 4;
  font-weight: bold;
}

RadAutoCompleteTextView.ac3 Token:selected {
  color: white;
  background: #00C147;
}

RadAutoCompleteTextView.ac3 Token TokenClearButton {
  color: #00C147;
}

RadAutoCompleteTextView.ac3 Token:selected TokenClearButton {
  color: white;
}

RadAutoCompleteTextView.ac3 ClearButton {
  color: #00C147;
}

RadAutoCompleteTextView.ac4 {
  color:red;
  background: #FFFFFF;
  padding: 14;
  margin: 5 10;
  border-width: 3;
  border-color: red;
  border-radius: 10;
  font-weight: bold;
  font-size: 20;
  suggest-mode: append;
}

RadAutoCompleteTextView.ac4 ClearButton {
  color: red;
}
      `;
    }
  },
};
