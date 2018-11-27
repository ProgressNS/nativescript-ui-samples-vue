import * as frameModule from 'tns-core-modules/ui/frame';
import { ValidationMode } from 'nativescript-ui-dataform';
import { BaseUser } from '../data';

const description = 'Validation Modes';

export default {
  name: 'ValidationModes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
      <ActionItem text="Immediate" android.position="popup" @tap="onImmediateTap"></ActionItem>
      <ActionItem text="OnLostFocus" android.position="popup" @tap="onOnLostFocusTap"></ActionItem>
      <ActionItem text="Manual" android.position="popup" @tap="onManualTap"></ActionItem>
    </ActionBar>
    <StackLayout>
      <RadDataForm
        ref="dataform"
        :source="person"
        :metadata="personMetadata"
        :validationMode="validationMode"
        commitMode="Manual">
      </RadDataForm>
      <Label :text="text"
             textWrap="true"
             margin="12"
             android:color="#C73339"
             ios:color="red"
             horizontalAlignment="center"></Label>
      <Button
        text="Validate manually"
        margin="12"
        horizontalAlignment="stretch"
        @tap="onValidateTap()"></Button>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      text: '',
      validationMode: ValidationMode.Immediate,
      person: new BaseUser(),
      personMetadata: {
        'isReadOnly': false,
        'propertyAnnotations':
        [
          {
            'name': 'username',
            'displayName': 'Nick',
            'index': 0,
            'validators': [
              { 'name': 'NonEmpty' },
              { 'name': 'MaximumLength', 'params': { 'length': 10 } }
            ]
          },
          {
            'name': 'email',
            'displayName': 'E-Mail',
            'index': 1,
            'editor': 'Email',
            'validators': [{
              'name': 'RegEx',
              'params': {
                'regEx': '^[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@telerik.com$',
                'errorMessage': 'Please provide your @telerik.com email.'
              }
            }]
          },
          {
            'name': 'password',
            'displayName': 'Password',
            'index': 2,
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
    onImmediateTap() {
      this.validationMode = ValidationMode.Immediate;
    },
    onOnLostFocusTap() {
      this.validationMode = ValidationMode.OnLostFocus;
    },
    onManualTap() {
      this.validationMode = ValidationMode.Manual;
    },
    onValidateTap() {
      this.$refs.dataform.validateAll()
        .then(result => {
          this.updateTextWithResult(result);
        });
    },
    updateTextWithResult(result) {
      this.text = `Validation result: ${result}`;
    }
  }
};
