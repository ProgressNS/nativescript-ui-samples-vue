import { Frame } from 'tns-core-modules/ui/frame';
import {
  RadSideDrawer,
  SideDrawerLocation
 } from 'nativescript-ui-sidedrawer';
import * as colorModule from 'tns-core-modules/color';

const description = 'Shadow';

export default {
  name: 'Shadow',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadSideDrawer ref="drawer"
                   :drawerLocation="location"
                   :shadowColor="shadowColor">
      <GridLayout rows="auto, *" ~drawerContent class="sideStackLayout">
          <StackLayout class="sideTitleStackLayout">
              <Label text="Navigation Menu"></Label>
          </StackLayout>
          <ScrollView row="1">
              <StackLayout class="sideStackLayout">
                  <Label text="Primary" class="sideLabel sideLightGrayLabel"></Label>
                  <Label text="Social" class="sideLabel"></Label>
                  <Label text="Promotions" class="sideLabel"></Label>
                  <Label text="Labels" class="sideLabel sideLightGrayLabel"></Label>
                  <Label text="Important" class="sideLabel"></Label>
                  <Label text="Starred" class="sideLabel"></Label>
                  <Label text="Sent Mail" class="sideLabel"></Label>
                  <Label text="Drafts" class="sideLabel"></Label>
                  <Button text="Close Drawer" @tap="onCloseDrawerTap()"></Button>
              </StackLayout>
          </ScrollView>
      </GridLayout>
      <ScrollView ~mainContent class="mainContent">
          <StackLayout>
              <Label text="SideDrawer for NativeScript is shown from the left side of the app window by default.You can change this behavior by setting the drawerLocation property to Left, Top, Right or Bottom."
                  textWrap="true" class="drawerContentText"></Label>
              <Button text="Default shadow" @tap="onDefaultShadowTap()" class="drawerContentButton"></Button>
              <Button text="Red shadow" @tap="onRedShadowTap()" class="drawerContentButton"></Button>
              <Button text="No shadow" @tap="onNoShadowTap()" class="drawerContentButton"></Button>
          </StackLayout>
      </ScrollView>
    </RadSideDrawer>
  </Page>
  `,
  data () {
    return {
      title: description,
      location: SideDrawerLocation.Left,
      shadowColor: new colorModule.Color('#00000000'),
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    openDrawer() {
      this.$refs.drawer.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    repaintAndOpenDrawer() {
      this.$nextTick(() => {
        this.openDrawer();
      });
    },
    onNoShadowTap() {
      this.shadowColor = new colorModule.Color('#00000000');
      this.repaintAndOpenDrawer();
    },
    onRedShadowTap() {
      this.shadowColor = new colorModule.Color('#FF0000');
      this.repaintAndOpenDrawer();
    },
    onDefaultShadowTap() {
      let defaultColor = RadSideDrawer.shadowColorProperty.defaultValue;

      this.shadowColor = defaultColor;
      this.repaintAndOpenDrawer();
    },
  },
};

