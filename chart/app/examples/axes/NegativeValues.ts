import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-negative-values-vue
import { getNegativeValues } from '../../data';

const description = 'Negative Values';

export default {
  name: 'NegativeValues',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <LinearAxis v-tkCartesianVerticalAxis allowZoom="true" minimum="-50" maximum="50"></LinearAxis>
      <CategoricalAxis v-tkCartesianHorizontalAxis allowZoom="true"></CategoricalAxis>

      <SplineAreaSeries v-tkCartesianSeries :items="items" categoryProperty="Period" valueProperty="Amount"></SplineAreaSeries>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getNegativeValues(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
// << chart-negative-values-vue