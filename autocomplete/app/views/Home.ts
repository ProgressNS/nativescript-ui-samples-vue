import { getExamples } from '../examples';

export default {
  name: 'Home',
  template: `
    <Page>
    <StackLayout class="page">
      <Label class="big" text="Autocomplete examples"></Label>
      <ListView ref="listView"
                for="example in examples"
                @itemTap="goToExample">
        <v-template>
          <StackLayout class="item" orientation="vertical">
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
      examples: getExamples(),
    };
  },
  methods: {
    goToExample ({ item }) {
      this.$navigateTo(item);
    },
  }
};
