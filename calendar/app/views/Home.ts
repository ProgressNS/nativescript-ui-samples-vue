import { getExamples } from '../examples';

export default {
  name: 'Home',
  template: `
  <Page>
      <ActionBar title="Calendar Vue">
      </ActionBar>
        <ListView ref="listView"
                  for="example in examples"
                  @itemTap="goToExample">
          <v-template>
            <StackLayout class="item" orientation="vertical">
              <Label class="titleLabel" :text="example.description">
              </Label>
            </StackLayout>
          </v-template>
        </ListView>
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
    },
  }
};
