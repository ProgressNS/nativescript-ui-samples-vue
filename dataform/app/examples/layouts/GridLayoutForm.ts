import * as frameModule from 'tns-core-modules/ui/frame';
import { PersonExtended } from '../../data';

const description = 'Grid Layout';

export default {
  name: 'GridLayoutForm',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
      <RadDataForm
        ref="dataform"
        :source="person">
        <TKPropertyGroup v-tkDataFormGroups collapsible="true" name="Main Info" hidden="false">
          <TKDataFormGridLayout v-tkPropertyGroupLayout></TKDataFormGridLayout>

          <TKEntityProperty v-tkPropertyGroupProperties name="name" index="0" columnIndex="0">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="age" index="0" columnIndex="1">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Number"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="email" index="1" columnIndex="0">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Email"></TKPropertyEditor>
          </TKEntityProperty>
        </TKPropertyGroup>

        <TKPropertyGroup v-tkDataFormGroups collapsible="true" name="Address" hidden="false">

          <TKDataFormGridLayout v-tkPropertyGroupLayout></TKDataFormGridLayout>

          <TKEntityProperty v-tkPropertyGroupProperties name="city" index="0" columnIndex="0">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="country" index="0" columnIndex="1">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="street" index="1" columnIndex="0">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="streetNumber" index="1" columnIndex="1">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Number"></TKPropertyEditor>
          </TKEntityProperty>
        </TKPropertyGroup>

        <TKPropertyGroup v-tkDataFormGroups collapsible="true" name="Payment Info" hidden="false">
          <TKDataFormGridLayout v-tkPropertyGroupLayout></TKDataFormGridLayout>

          <TKEntityProperty v-tkPropertyGroupProperties name="bankName" index="0" columnIndex="0">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="bankId" index="0" columnIndex="1">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="bankVerificationCode" index="1" columnIndex="0">
            <TKPropertyEditor v-tkEntityPropertyEditor type="Number"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty v-tkPropertyGroupProperties name="bankExpirationDate" index="1" columnIndex="1">
            <TKPropertyEditor v-tkEntityPropertyEditor type="DatePicker"></TKPropertyEditor>
          </TKEntityProperty>
        </TKPropertyGroup>
      </RadDataForm>
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
      frameModule.topmost().goBack();
    },
  }
};
