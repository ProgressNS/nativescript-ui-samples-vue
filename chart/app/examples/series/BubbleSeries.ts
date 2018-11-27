import * as frameModule from 'tns-core-modules/ui/frame';
import { getLowDataModel, getMiddleDataModel, getHighDataModel } from '../../data';

const description = 'Bubble Series';

export default {
  name: 'BubbleSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>

      <BubbleSeries v-tkCartesianSeries
                    :items="highDataModel"
                    bubbleScale="5"
                    categoryProperty="Year"
                    valueProperty="Amount"
                    bubbleSizeProperty="Impact"></BubbleSeries>

      <BubbleSeries v-tkCartesianSeries
                    :items="middleDataModel"
                    bubbleScale="5"
                    categoryProperty="Year"
                    valueProperty="Amount"
                    bubbleSizeProperty="Impact"></BubbleSeries>

      <BubbleSeries v-tkCartesianSeries
                    :items="lowDataModel"
                    bubbleScale="5"
                    categoryProperty="Year"
                    valueProperty="Amount"
                    bubbleSizeProperty="Impact"></BubbleSeries>

      <CategoricalAxis v-tkCartesianHorizontalAxis verticalLocation="Bottom" labelFitMode="Rotate" labelRotationAngle="1.2"></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis />
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      highDataModel: getHighDataModel(),
      middleDataModel: getMiddleDataModel(),
      lowDataModel: getLowDataModel(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  },
};
