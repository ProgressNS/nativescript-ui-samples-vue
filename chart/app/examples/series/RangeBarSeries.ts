import * as frameModule from 'tns-core-modules/ui/frame';
// >> chart-range-bar-vue
import { getRangeBarData } from '../../data';

const description = 'Range Bar Series';

export default {
  name: 'RangeBarSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <LinearAxis v-tkCartesianVerticalAxis horizontalLocation="Left" labelSize="11"/>
      <CategoricalAxis v-tkCartesianHorizontalAxis verticalLocation="Bottom" labelSize="11"/>
      <RangeBarSeries v-tkCartesianSeries
        showLabels="true"
        categoryProperty="Name"
        lowPropertyName="Low"
        highPropertyName="High"
        :items="items"/>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getRangeBarData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
// << chart-range-bar-vue