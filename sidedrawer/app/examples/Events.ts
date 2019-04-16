import * as frameModule from 'tns-core-modules/ui/frame';
// >> sidedrawer-events-vue
import { DrawerTransitionBase } from 'nativescript-ui-sidedrawer';

const description = 'Events';

export default {
  name: 'Events',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadSideDrawer ref="drawer"
                   @drawerOpening="onDrawerOpening()"
                   @drawerOpened="onDrawerOpened()"
                   @drawerClosing="onDrawerClosing()"
                   @drawerClosed="onDrawerClosed()"
                   @drawerPan="onDrawerPan()"
                   :transition="sideDrawerTransition">
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
        <Button text="Close Drawer" @tap="onCloseDrawerTap()"></Button>
      </StackLayout>
      <StackLayout ~mainContent>
        <Button text="OPEN DRAWER" @tap="openDrawer()" class="drawerContentButton"></Button>
        <Label text="Drawer notification: " class="drawerContentText"></Label>
        <Label class="drawerContentText">{{ currentNotification }}</Label>
      </StackLayout>
    </RadSideDrawer>
  </Page>
  `,
  data () {
    return {
      title: description,
      currentNotification: '',
      sideDrawerTransition: DrawerTransitionBase,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    openDrawer() {
      this.$refs.drawer.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    onDrawerOpening(args) {
      this.currentNotification = "Drawer opening";
    },
    onDrawerOpened(args) {
      this.currentNotification = "Drawer opened";
    },
    onDrawerClosing(args) {
      this.currentNotification = "Drawer closing";
    },
    onDrawerClosed(args) {
      this.currentNotification = "Drawer closed";
    },
    onDrawerPan(args) {
      this.currentNotification = "Drawer pan";
    },
  },
};

// << sidedrawer-events-vue