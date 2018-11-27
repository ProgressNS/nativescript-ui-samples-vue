import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Customization';

export default {
  name: 'Customization',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <BarSeries v-tkCartesianSeries
                 categoryProperty="Country"
                 valueProperty="Amount"
                 :items="items"></BarSeries>
      <CategoricalAxis v-tkCartesianHorizontalAxis labelTextColor="#cb4b16" labelSize="10" lineThickness="3" lineColor="Red"></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis labelTextColor="Green" lineColor="Blue" lineThickness="5" horizontalLocation="Right" lineHidden="false"></LinearAxis>
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
