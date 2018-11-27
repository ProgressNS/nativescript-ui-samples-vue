import * as frameModule from 'tns-core-modules/ui/frame';
import { getCountriesData } from '../../data';

const description = 'Label visibility';

export default {
  name: 'LabelVisibility',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis
                       lastLabelVisibility="Hidden"
                       ios:firstLabelVisibility="Hidden"
                       ios:plotMode="OnTicks"></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

      <AreaSeries v-tkCartesianSeries
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="items"></AreaSeries>

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
