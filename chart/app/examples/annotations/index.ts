import * as frameModule from 'tns-core-modules/ui/frame';

import PlotBand from './PlotBand';
import GridLine from './GridLine';

const description = 'Annotations';

export default {
  name: 'Annotations',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
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
  </Page>
  `,
  data () {
    return {
      title: description,
      examples: [
        PlotBand,
        GridLine,
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
