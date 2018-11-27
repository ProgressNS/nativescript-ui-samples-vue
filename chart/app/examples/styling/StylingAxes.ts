import * as frameModule from 'tns-core-modules/ui/frame';
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
      <LinearAxis v-tkCartesianHorizontalAxis labelTextColor="Green"></LinearAxis>
      <CategoricalAxis v-tkCartesianVerticalAxis labelTextColor="#cb4b16" labelSize="10" lineThickness="3" lineColor="Red"></CategoricalAxis>
      <BarSeries v-tkCartesianSeries
                  :items="items"
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="items" />
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
