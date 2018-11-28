import { getExamples } from '../examples';

export default {
  name: 'Home',
  template: `
    <Page>
    <StackLayout>
      <RadListView ref="listView"
                   for="example in examples"
                   @itemTap="goToExample">
        <v-template name="header">
          <Label class="big" text="Examples list"></Label>
        </v-template>

        <v-template>
          <StackLayout class="item" orientation="vertical" style="margin-top: 20">
            <Label :text="example.description">
            </Label>
          </StackLayout>
        </v-template>
    </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      examples: getExamples(),
    };
  },
  methods: {
    goToExample ({ item }) {
      this.$navigateTo(item);
    }
  }
};
