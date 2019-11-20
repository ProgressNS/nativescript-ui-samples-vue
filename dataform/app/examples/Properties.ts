import { Frame } from 'tns-core-modules/ui/frame';

const description = 'Properties';

export default {
  name: 'Properties',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadDataForm
      :source="person"
      :metadata="personMetadata">
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
      },
      personMetadata: {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
        'propertyAnnotations':
        [
          {
            'name': 'name',
            'displayName': 'Name',
            'index': 0
          },
          {
            'name': 'age',
            'displayName': 'Age',
            'index': 1,
            'editor': 'Number'
          },
          {
            'name': 'email',
            'displayName': 'E-Mail',
            'index': 2,
            'editor': 'Email'
          },
          {
            'name': 'city',
            'displayName': 'City',
            'index': 3,
            'editor': 'Picker',
            'valuesProvider': ['New York', 'Washington', 'Los Angeles']
          },
          {
            'name': 'street',
            'displayName': 'Street Name',
            'index': 4
          },
          {
            'name': 'streetNumber',
            'displayName': 'Street Number',
            'index': 5,
            'editor': 'Number'
          },
          {
            'name': 'nested',
            'displayName': 'Nested',
            'index': 6,
            'ignore': true
          },
          {
            'name': 'date',
            'displayName': 'Date',
            'editor': 'DatePicker',
            'index': 7
          }
        ]
      }
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  }
};
