import * as frameModule from 'tns-core-modules/ui/frame';

const description = 'Localization';
// >> calendar-localization-vue
export default {
  name: 'Localization',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <GridLayout
      orientation="vertical" rows="*, auto">
      <RadCalendar ref="calendar" :locale="locale"></RadCalendar>
      <StackLayout orientation="horizontal" row="1" class="m-10">
        <Button text="de-DE" @tap="changeLocale('de-DE')"></Button>
        <Button text="bg-BG" @tap="changeLocale('bg-BG')"></Button>
        <Button text="en-UK" @tap="changeLocale('en-UK')"></Button>
        <Button text="fr-FR" @tap="changeLocale('fr-FR')"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      locale: 'en-EN',
      title: description
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    changeLocale(locale: String) {
      this.locale = locale;
    },
  }
};
// << calendar-localization-vue