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
      <BarSeries v-tkCartesianSeries :items="items" categoryProperty="Country" valueProperty="Amount">
        <CategoricalAxis v-tkBarHorizontalAxis labelTextColor="#cb4b16" labelSize="10" lineThickness="3" lineColor="Red"></CategoricalAxis>
        <LinearAxis v-tkBarVerticalAxis labelTextColor="Green" lineColor="Blue" lineThickness="5" horizontalLocation="Right" lineHidden="false"></LinearAxis>
      </BarSeries>
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
