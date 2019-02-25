import { getExamples } from '../examples';

export default {
  name: 'Home',
  template: `
  <Page>
    <ActionBar title="DataForm Vue">
    </ActionBar>
    <StackLayout class="page">
      <ListView ref="listView"
                separatorColor="transparent"
                for="example in examples"
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
