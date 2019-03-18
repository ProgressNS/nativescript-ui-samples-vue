import * as frameModule from 'tns-core-modules/ui/frame';
import { Person } from '../data';

const description = 'Groups';

export default {
  name: 'Groups',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadDataForm :source="person">
      <TKPropertyGroup v-tkDataFormGroups collapsible="true" name="Main Info" hidden="false">
        <TKEntityProperty v-tkPropertyGroupProperties name="name">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
        </TKEntityProperty>
        <TKEntityProperty v-tkPropertyGroupProperties name="age">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Number"></TKPropertyEditor>
        </TKEntityProperty>
        <TKEntityProperty v-tkPropertyGroupProperties name="email">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Email"></TKPropertyEditor>
        </TKEntityProperty>
      </TKPropertyGroup>
      <TKPropertyGroup v-tkDataFormGroups collapsible="true" name="Address" hidden="false">
        <TKEntityProperty v-tkPropertyGroupProperties name="city">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
        </TKEntityProperty>
        <TKEntityProperty v-tkPropertyGroupProperties name="street">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
        </TKEntityProperty>
        <TKEntityProperty v-tkPropertyGroupProperties name="streetNumber">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Number"></TKPropertyEditor>
        </TKEntityProperty>
      </TKPropertyGroup>
    </RadDataForm>
  </Page>
  `,
  data () {
    return {
      title: description,
      person: new Person("John", 23, "john@company.com", "New York", "5th Avenue", 11)
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
