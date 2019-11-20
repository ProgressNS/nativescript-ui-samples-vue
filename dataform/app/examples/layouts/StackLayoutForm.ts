import { Frame } from 'tns-core-modules/ui/frame';
import { PersonExtended } from '../../data';

const description = 'Stack Layout';

export default {
  name: 'StackLayoutForm',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout>
      <RadDataForm
        ref="dataform"
        :source="person">
        <TKPropertyGroup v-tkDataFormGroups collapsible="true" name="Main Info" hidden="false">
          <TKDataFormStackLayout v-tkPropertyGroupLayout></TKDataFormStackLayout>

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

          <TKDataFormStackLayout v-tkPropertyGroupLayout></TKDataFormStackLayout>

          <TKEntityProperty v-tkPropertyGroupProperties name="city">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="country">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="street">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="streetNumber">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Number"></TKPropertyEditor>
          </TKEntityProperty>
        </TKPropertyGroup>

        <TKPropertyGroup v-tkDataFormGroups collapsible="true" name="Payment Info" hidden="false">
          <TKDataFormStackLayout v-tkPropertyGroupLayout></TKDataFormStackLayout>

          <TKEntityProperty v-tkPropertyGroupProperties name="bankName">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="bankId">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="bankVerificationCode">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Number"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="bankExpirationDate">
            <TKPropertyEditor v-tkEntityPropertyEditor type="DatePicker"></TKPropertyEditor>
          </TKEntityProperty>
        </TKPropertyGroup>
      </RadDataForm>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      person: new PersonExtended("John", 23, "john@company.com", "New York", "5th Avenue", 11, "USA", "Bank of America", "00xx00xx00", 123, "2016-11-09"),
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  }
};
