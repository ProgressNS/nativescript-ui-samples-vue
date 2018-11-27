import * as frameModule from 'tns-core-modules/ui/frame';

const description = 'Localization';

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
      <StackLayout orientation="horizontal" row="1">
        <Button text="en-EN" @tap="changeLocale('en-EN')"></Button>
        <Button text="es-ES" @tap="changeLocale('es-ES')"></Button>
        <Button text="ru-RU" @tap="changeLocale('ru-RU')"></Button>
        <Button text="fr-FR" @tap="changeLocale('fr-FR')"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      locale: 'en-EN',
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
