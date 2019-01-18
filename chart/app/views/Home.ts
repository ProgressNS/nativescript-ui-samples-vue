import { getExamples } from '../examples';

export default {
  name: 'Home',
  template: `
  <Page class="page">
    <ActionBar title="Chart Vue"></ActionBar>
    <StackLayout>
      <ListView ref="listView"
                for="example in examples"
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
      examples: getExamples(),
    };
  },
  methods: {
    goToExample ({ item }) {
      this.$navigateTo(item);
    },
  }
};
