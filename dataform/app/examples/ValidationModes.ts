import { Frame } from 'tns-core-modules/ui/frame';
// >> dataform-vmodes-vue
import { DataFormValidationMode } from 'nativescript-ui-dataform';
import { BaseUser } from '../data';

const description = 'Validation Modes';

export default {
  name: 'ValidationModes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <SegmentedBar @selectedIndexChange="onSelectedIndexChanged" :items="segmentedBarItems" v-model="selectedBarIndex"></SegmentedBar>
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
      validationMode: DataFormValidationMode.Immediate,
      person: new BaseUser(),
      segmentedBarItems: (function() {
        const segmentedBarModule = require(
            "tns-core-modules/ui/segmented-bar");
        let segmentedBarItem1 = new segmentedBarModule.SegmentedBarItem();
        segmentedBarItem1.title = "Immediate";
        let segmentedBarItem2 = new segmentedBarModule.SegmentedBarItem();
        segmentedBarItem2.title = "OnLostFocus";
        let segmentedBarItem3 = new segmentedBarModule.SegmentedBarItem();
        segmentedBarItem3.title = "Manual";
        return [segmentedBarItem1, segmentedBarItem2, segmentedBarItem3];
      })(),
      selectedBarIndex: 0,
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
      Frame.topmost().goBack();
    },
    onImmediateTap() {
      this.validationMode = DataFormValidationMode.Immediate;
    },
    onOnLostFocusTap() {
      this.validationMode = DataFormValidationMode.OnLostFocus;
    },
    onManualTap() {
      this.validationMode = DataFormValidationMode.Manual;
    },
    onValidateTap() {
      this.$refs.dataform.validateAll()
        .then(result => {
          this.updateTextWithResult(result);
        });
    },
    updateTextWithResult(result) {
      this.text = `Validation result: ${result}`;
    },
    onSelectedIndexChanged() {
      switch (this.selectedBarIndex) {
          case 0:
              this.validationMode = DataFormValidationMode.Immediate;
              break;
          case 1:
              this.validationMode = DataFormValidationMode.OnLostFocus;
              break;
          case 2:
              this.validationMode = DataFormValidationMode.Manual;
              break;
      }
    }
  }
};
// << dataform-vmodes-vue