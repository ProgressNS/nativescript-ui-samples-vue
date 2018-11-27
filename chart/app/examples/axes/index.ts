import * as frameModule from 'tns-core-modules/ui/frame';

import Customization from './Customization';
import DateTimeAxes from './DateTimeAxes';
import LabelVisibility from './LabelVisibility';
import MultipleAxes from './MultipleAxes';
import NegativeValues from './NegativeValues';

const description = 'Axes';

export default {
  name: 'Axes',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <ListView for="example in examples"
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
        Customization,
        MultipleAxes,
        NegativeValues,
        DateTimeAxes,
        LabelVisibility,
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
