import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-styling-axes-vue
import { getCountriesData } from '../../data';

const description = 'Styling Axes';

export default {
  name: 'StylingAxes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <LinearAxis v-tkCartesianHorizontalAxis labelTextColor="Green" lineHidden="false" labelSize="10" lineThickness="3" lineColor="Green"></LinearAxis>
      <CategoricalAxis v-tkCartesianVerticalAxis labelTextColor="#cb4b16" labelSize="10" lineThickness="3" lineColor="Red"></CategoricalAxis>
      <BarSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount"/>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getCountriesData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
// << chart-styling-axes-vue