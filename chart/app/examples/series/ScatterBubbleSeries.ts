import { Frame } from 'tns-core-modules/ui/frame';
// >> chart-scatter-bubble-series-vue
import { getScatterData } from '../../data';

const description = 'Scatter Bubble Series';

export default {
  name: 'ScatterBubbleSeriesExample',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadCartesianChart>
      <LinearAxis v-tkCartesianHorizontalAxis></LinearAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

      <ScatterBubbleSeries v-tkCartesianSeries :items="items" bubbleScale="5" xProperty="Age" yProperty="Salary" bubbleSizeProperty="Impact"></ScatterBubbleSeries>
      <ScatterBubbleSeries v-tkCartesianSeries :items="items" bubbleScale="5" xProperty="Age" yProperty="Spendings" bubbleSizeProperty="Impact"></ScatterBubbleSeries>
      <ScatterBubbleSeries v-tkCartesianSeries :items="items" bubbleScale="5" xProperty="Age" yProperty="Savings" bubbleSizeProperty="Impact"></ScatterBubbleSeries>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      title: description,
      items: getScatterData(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  },
};
// << chart-scatter-bubble-series-vue