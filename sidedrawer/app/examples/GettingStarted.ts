import { Frame } from 'tns-core-modules/ui/frame';

const description = 'Getting Started';
// >> sidedrawer-getting-started-vue
export default {
  name: 'GettingStarted',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent class="sideStackLayout">
          <StackLayout class="sideTitleStackLayout">
              <Label text="Navigation Menu"></Label>
          </StackLayout>
          <StackLayout class="sideStackLayout">
              <Label text="Primary" class="sideLabel sideLightGrayLabel"></Label>
              <Label text="Social" class="sideLabel"></Label>
              <Label text="Promotions" class="sideLabel"></Label>
              <Label text="Labels" class="sideLabel sideLightGrayLabel"></Label>
              <Label text="Important" class="sideLabel"></Label>
              <Label text="Starred" class="sideLabel"></Label>
              <Label text="Sent Mail" class="sideLabel"></Label>
              <Label text="Drafts" class="sideLabel"></Label>
          </StackLayout>
          <Label text="Close Drawer" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap"></Label>
      </StackLayout>
      <StackLayout ~mainContent>
          <Label textWrap="true" class="drawerContentText">{{ mainContentText }}</Label>
          <StackLayout orientation="Horizontal">
            <Button text="OPEN DRAWER" @tap="onOpenDrawerTap()" class="drawerContentButton"></Button>
            <Button text="TOGGLE DRAWER" @tap="onToggleDrawerTap()" class="drawerContentButton"></Button>
          </StackLayout>
      </StackLayout>
    </RadSideDrawer>
  </Page>
  `,
  data () {
    return {
      title: description,
      mainContentText: 'SideDrawer for NativeScript can be easily setup in the HTML\
definition of your page by defining tkDrawerContent and tkMainContent. \
The component has a default transition and position and also exposes notifications\
related to changes in its state. Swipe from left to open side drawer.',
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    onOpenDrawerTap() {
      this.$refs.drawer.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    onToggleDrawerTap() {
      this.$refs.drawer.toggleDrawerState();
    },
  },
};

// << sidedrawer-getting-started-vue