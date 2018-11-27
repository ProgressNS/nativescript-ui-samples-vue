import * as frameModule from 'tns-core-modules/ui/frame';
import { AdvancedUser } from '../data';

const description = 'Validation with Markup';

export default {
  name: 'ValidationMarkup',
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
        :metadata="personMetadata">
        <TKEntityProperty v-tkDataFormProperty name="username" index="0">
          <TKNonEmptyValidator v-tkEntityPropertyValidators errorMessage="Username can't be empty."></TKNonEmptyValidator>
          <TKMaximumLengthValidator v-tkEntityPropertyValidators errorMessage="Username can be at most 12 characters." length="12"></TKMaximumLengthValidator>
        </TKEntityProperty>
        <TKEntityProperty v-tkDataFormProperty name="password" index="1">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Password">
          </TKPropertyEditor>
          <TKMinimumLengthValidator v-tkEntityPropertyValidators
                                    errorMessage="Password must be at least 6 characters long."
                                    length="6">
          </TKMinimumLengthValidator>
        </TKEntityProperty>
        <TKEntityProperty v-tkDataFormProperty name="email" displayName="E-mail" index="2">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Email"></TKPropertyEditor>
          <TKEmailValidator v-tkEntityPropertyValidators></TKEmailValidator>
        </TKEntityProperty>
        <TKEntityProperty v-tkDataFormProperty name="id" displayName="ID" index="3">
          <TKRangeValidator v-tkEntityPropertyValidators errorMessage="ID must be between 1-100." minimum="1" maximum="100"></TKRangeValidator>
          <TKPropertyEditor v-tkEntityPropertyEditor type="Number"></TKPropertyEditor>
        </TKEntityProperty>
        <TKEntityProperty v-tkDataFormProperty name="phoneNumber" displayName="Phone Number" index="4">
          <TKPhoneValidator v-tkEntityPropertyValidators errorMessage="Incorrect phone number"></TKPhoneValidator>
          <TKPropertyEditor v-tkEntityPropertyEditor type="Phone"></TKPropertyEditor>
        </TKEntityProperty>
        <TKEntityProperty v-tkDataFormProperty name="pin" displayName="Enter PIN" index="5">
          <TKRegExValidator v-tkEntityPropertyValidators regEx="\\d{4}" errorMessage="PIN number should contain 4 digits."></TKRegExValidator>
        </TKEntityProperty>
        <TKEntityProperty v-tkDataFormProperty name="agreeTerms" displayName="I agree with terms" index="6">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Switch"></TKPropertyEditor>
          <TKIsTrueValidator v-tkEntityPropertyValidators errorMessage="You must agree with the terms."></TKIsTrueValidator>
        </TKEntityProperty>
      </RadDataForm>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      person: new AdvancedUser(),
      personMetadata: {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
      }
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  }
};
