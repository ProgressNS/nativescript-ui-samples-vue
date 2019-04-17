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
                separatorColor="transparent"
                @itemTap="goToExample">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="example.description" class="titleLabel"></Label>
            <StackLayout height="1" backgroundColor="#EEEEEE"></StackLayout>
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
        TrackballExample,
        TrackballContent,
        PieSelection,
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
