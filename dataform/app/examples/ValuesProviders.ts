import { CitiesList } from '../data';

const description = 'Values Provider';

export default {
  name: 'ValuesProvider',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadDataForm
      :source="cities"
      :metadata="citiesMetadata">
      <TKEntityProperty
          v-tkDataFormProperty
          name="city1"
          displayName="Selected City 1"
          index="0"
          :valuesProvider="cityProvider1">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Picker"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty
          v-tkDataFormProperty
          name="city2"
          displayName="Selected City 2"
          index="1"
          :valuesProvider="cityProvider2">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Picker"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty
          v-tkDataFormProperty
          name="city3"
          displayName="Selected City 3"
          index="2"
          :valuesProvider="cityProvider3">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Picker"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty
          v-tkDataFormProperty
          name="city4"
          displayName="Selected City 4"
          index="3"
          :valuesProvider="cityProvider4">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Picker"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty
          v-tkDataFormProperty
          name="city5"
          displayName="Selected City 5"
          index="4"
          :valuesProvider="cityProvider5">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Picker"></TKPropertyEditor>
      </TKEntityProperty>
    </RadDataForm>
  </Page>
  `,
  data () {
    return {
      title: description,
      cities: new CitiesList(),
      citiesMetadata: {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
      },
    };
  },
  computed: {
    cityProvider1 () {
      return 'Seville, Shanghai, Lagos, Moscow, São Paulo, Sydney';
    },
    cityProvider2 () {
      return ['Seville', 'Shanghai', 'Lagos', 'Moscow', 'São Paulo', 'Sydney'];
    },
    cityProvider3 () {
      return new Map([
        [1, 'Seville'],
        [2, 'Shanghai'],
        [3, 'Lagos'],
        [4, 'Moscow'],
        [5, 'São Paulo'],
        [6, 'Sydney'],
      ]);
    },
    cityProvider4 () {
      return [
        { key: 1, label: 'Seville' },
        { key: 2, label: 'Shanghai' },
        { key: 3, label: 'Lagos' },
        { key: 4, label: 'Moscow' },
        { key: 5, label: 'São Paulo' },
        { key: 6, label: 'Sydney' },
      ];
    },
    cityProvider5 () {
      return {
        key: 'id',
        label: 'name',
        items: [
            { id: 1, name: 'Seville' },
            { id: 2, name: 'Shanghai' },
            { id: 3, name: 'Lagos' },
            { id: 4, name: 'Moscow' },
            { id: 5, name: 'São Paulo' },
            { id: 6, name: 'Sydney' }
        ]
      };
    },
  },
  methods: {
    onNavigationButtonTap() {
      this.$navigateBack();
    },
  }
};
