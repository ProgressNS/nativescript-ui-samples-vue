import { Frame } from 'tns-core-modules/ui/frame';
// >> sidedrawer-transitions-vue
import {
  PushTransition,
  FadeTransition,
  RevealTransition,
  ReverseSlideOutTransition,
  ScaleDownPusherTransition,
  ScaleUpTransition,
  SlideAlongTransition,
  SlideInOnTopTransition
 } from 'nativescript-ui-sidedrawer';

const description = 'Transitions';

export default {
  name: 'Transitions',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadSideDrawer ref="drawer" :drawerTransition="transition">
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
      <ScrollView ~mainContent>
          <StackLayout class="mainStackLayout">
              <Button text="Fade Transition" @tap="onFadeTransitionTap()" class="drawerContentButton"></Button>
              <Button text="Push Transition" @tap="onPushTransitionTap()" class="drawerContentButton"></Button>
              <Button text="Reveal Transition" @tap="onRevealTransitionTap()" class="drawerContentButton"></Button>
              <Button text="ReverseSlideOut Transition" @tap="onReverseSlideOutTransitionTap()" class="drawerContentButton"></Button>
              <Button text="ScaleDownPusher Transition" @tap="onScaleDownPusherTransitionTap()" class="drawerContentButton"></Button>
              <Button text="ScaleUp Transition" @tap="onScaleUpTransitionTap()" class="drawerContentButton"></Button>
              <Button text="SlideAlong Transition" @tap="onSlideAlongTransitionTap()" class="drawerContentButton"></Button>
              <Button text="SlideInOnTop Transition" @tap="onSlideInOnTopTransitionTap()" class="drawerContentButton"></Button>
          </StackLayout>
      </ScrollView>
    </RadSideDrawer>
  </Page>
  `,
  data () {
    return {
      title: description,
      transition: new PushTransition(),
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
    onFadeTransitionTap() {
      this.transition = new FadeTransition();
      this.repaintAndOpenDrawer();
    },
    onPushTransitionTap() {
      this.transition = new PushTransition();
      this.repaintAndOpenDrawer();
    },
    onRevealTransitionTap() {
      this.transition = new RevealTransition();
      this.repaintAndOpenDrawer();
    },
    onReverseSlideOutTransitionTap() {
      this.transition = new ReverseSlideOutTransition();
      this.repaintAndOpenDrawer();
    },
    onScaleDownPusherTransitionTap() {
      this.transition = new ScaleDownPusherTransition();
      this.repaintAndOpenDrawer();
    },
    onScaleUpTransitionTap() {
      this.transition = new ScaleUpTransition();
      this.repaintAndOpenDrawer();
    },
    onSlideAlongTransitionTap() {
      this.transition = new SlideAlongTransition();
      this.repaintAndOpenDrawer();
    },
    onSlideInOnTopTransitionTap() {
      this.transition = new SlideInOnTopTransition();
      this.repaintAndOpenDrawer();
    },
  },
};

// << sidedrawer-transitions-vue