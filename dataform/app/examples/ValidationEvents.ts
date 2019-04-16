import * as frameModule from 'tns-core-modules/ui/frame';
// >> dataform-vevent-vue
import { BaseUser } from '../data';

const description = 'Validation Events';

export default {
  name: 'ValidationEvents',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadDataForm
        ref="dataform"
        :source="person"
        :metadata="personMetadata"
        @propertyValidate="onPropertyValidate"
        @propertyValidated="onPropertyValidated">
      </RadDataForm>
      <Label :text="text"
             textWrap="true"
             margin="12"
             android:color="#C73339"
             ios:color="red"
             horizontalAlignment="center"></Label>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      text: '',
      person: {
        password: '',
        password2: '',
      },
      personMetadata: {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
        'propertyAnnotations':
        [
          {
            'name': 'password',
            'displayName': 'Password',
            'index': 0,
            'validators': [
              {
                'name': 'NonEmpty',
              },
              {
                'name': 'MinimumLength',
                'params': {
                  'length': 6
                }
              },
            ]
          },
          {
            'name': 'password2',
            'displayName': 'Repeat Password',
            'index': 1,
            'validators': [
              {
                'name': 'NonEmpty',
              },
              {
                'name': 'MinimumLength',
                'params': {
                  'length': 6
                }
              },
            ]
          },
        ]
      }
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onPropertyValidate(args) {
      let validationResult = true;

      if (args.propertyName === 'password2') {
          const dataForm = args.object;
          const password1 = dataForm.getPropertyByName('password');
          const password2 = args.entityProperty;
          if (password1.valueCandidate !== password2.valueCandidate) {
              password2.errorMessage = 'Passwords do not match.';
              validationResult = false;
          }
      }
      args.returnValue = validationResult;
    },
    onPropertyValidated({ object, propertyName, entityProperty }) {
      const validatedValue = entityProperty.valueCandidate;
      const validationResult = entityProperty.isValid;

      this.text = `Validated!
        PropertyName: ${propertyName}
        Value: ${validatedValue}
        Result: ${validationResult}`;

      if (propertyName === 'password') {
          const dataForm = object;
          const password2 = dataForm.getPropertyByName('password2');
          const password1 = entityProperty;
          if (password2.valueCandidate !== '') {
              if (password1.valueCandidate !== password2.valueCandidate) {
                  dataForm.notifyValidated('password2', false);
              } else {
                  dataForm.notifyValidated('password2', true);
              }
          }
      }
    },
  }
};
// << dataform-vevent-vue