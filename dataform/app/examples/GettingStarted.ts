import * as frameModule from 'tns-core-modules/ui/frame';

const description = 'Getting Started';

export default {
  name: 'GettingStarted',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadDataForm :source="person">
    </RadDataForm>
  </Page>
  `,
  data () {
    return {
      title: description,
      person: {
        name: 'John',
        age: 23,
        email: 'john@company.com',
        city: 'New York',
        street: '5th Avenue',
        streetNumber: 11,
      }
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  }
};
