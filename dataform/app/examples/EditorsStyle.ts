import { Frame } from 'tns-core-modules/ui/frame';
import { PersonBase } from '../data';
import { DataFormFontStyle } from "nativescript-ui-dataform";
import { Color } from 'tns-core-modules/color';

const description = 'Editors styles';

export default {
  name: 'EditorsStyle',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout rows="auto, *">
      <Button text="Change styles" @tap="onChangeStyles"></Button>
      <RadDataForm
        ref="dataForm"
        row="1"
        :source="person">
        <TKEntityProperty v-tkDataFormProperty name="name">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Text">
            <TKPropertyEditorStyle v-tkPropertyEditorStyle labelFontStyle="red"></TKPropertyEditorStyle>
          </TKPropertyEditor>
        </TKEntityProperty>
        <TKEntityProperty v-tkDataFormProperty name="age">
          <TKPropertyEditor v-tkEntityPropertyEditor type="Decimal">
            <TKPropertyEditorStyle v-tkPropertyEditorStyle labelTextColor="green"></TKPropertyEditorStyle>
          </TKPropertyEditor>
        </TKEntityProperty>
        <TKEntityProperty v-tkDataFormProperty name="birthDate">
          <TKPropertyEditor v-tkEntityPropertyEditor type="DatePicker">
            <TKPropertyEditorStyle v-tkPropertyEditorStyle labelTextColor="blue"></TKPropertyEditorStyle>
          </TKPropertyEditor>
        </TKEntityProperty>

      </RadDataForm>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      person: new PersonBase("John", 23, "1993-05-16")
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onChangeStyles() {
      this._nameEditor.propertyEditorStyle.labelFontStyle = DataFormFontStyle.BoldItalic;
      this._ageEditor.propertyEditorStyle.labelFontStyle = DataFormFontStyle.BoldItalic;
      this._birthDateEditor.propertyEditorStyle.labelFontStyle = DataFormFontStyle.BoldItalic;

      this._nameEditor.propertyEditorStyle.labelFontName = "Times New Roman";
      this._ageEditor.propertyEditorStyle.labelFontName = "Times New Roman";
      this._birthDateEditor.propertyEditorStyle.labelFontName = "Times New Roman";

      this._nameEditor.propertyEditorStyle.labelTextSize = 20;
      this._ageEditor.propertyEditorStyle.labelTextSize = 20;
      this._birthDateEditor.propertyEditorStyle.labelTextSize = 20;

      this._nameEditor.propertyEditorStyle.labelTextColor = new Color("orange");
      this._ageEditor.propertyEditorStyle.labelTextColor = new Color("purple");
      this._birthDateEditor.propertyEditorStyle.labelTextColor = new Color("lime");
    }
  },
  mounted() {
    let dataForm = this.$refs.dataForm;
    this._nameEditor = dataForm.getPropertyByName('name').editor;
    this._ageEditor = dataForm.getPropertyByName('age').editor;
    this._birthDateEditor = dataForm.getPropertyByName('birthDate').editor;
  },
};
