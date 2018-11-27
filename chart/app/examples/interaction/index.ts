import * as frameModule from 'tns-core-modules/ui/frame';
import DatapointSelection from './DatapointSelection';
import PanZoom from './PanZoom';
import PieSelection from './PieSelection';
import SeriesSelection from './SeriesSelection';
import TrackballContent from './TrackballContent';
import TrackballExample from './Trackball';

const description = 'Interaction';

export default {
  name: 'Interaction',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout class="page">
      <ListView for="example in examples"
                class="list"
                @itemTap="goToExample">
        <v-template>
          <StackLayout class="item" orientation="vertical" style="margin-top: 20">
            <Label :text="example.description">
            </Label>
          </StackLayout>
        </v-template>
      </ListView>
  </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      examples: [
        PanZoom,
        PieSelection,
        TrackballExample,
        TrackballContent,
        SeriesSelection,
        DatapointSelection,
      ],
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    goToExample ({ item }) {
      this.$navigateTo(item);
    },
  },
};
