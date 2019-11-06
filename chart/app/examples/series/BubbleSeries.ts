import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-bubble-vue
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
      <LinearAxis v-tkCartesianVerticalAxis />
      <CategoricalAxis v-tkCartesianHorizontalAxis verticalLocation="Bottom" labelFitMode="Rotate" labelRotationAngle="1.2"></CategoricalAxis>

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
      Frame.topmost().goBack();
    },
  },
};
// << chart-bubble-vue