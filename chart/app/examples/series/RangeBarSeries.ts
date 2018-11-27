import * as frameModule from 'tns-core-modules/ui/frame';
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
      <RangeBarSeries v-tkCartesianSeries
                      showLabels="true"
                      legendTitle="Ranges"
                      categoryProperty="Name"
                      lowPropertyName="Low"
                      highPropertyName="High"
                      :items="items" />
      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
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
