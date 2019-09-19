import { getExamples } from '../examples';
import { RadSideDrawer, FadeTransition, PushTransition, RevealTransition, ReverseSlideOutTransition, ScaleDownPusherTransition, ScaleUpTransition, SlideAlongTransition, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";

export default {
  name: 'Home',
  template: `
  <Page>
    <ActionBar title="SideDrawer Vue">
      <ActionItem text="Root" @tap="onNavBtnTap" />
    </ActionBar>
    <GridLayout rows="auto, *">
      <GridLayout columns="50*, 50*" rows="auto, auto, auto, auto">
          <Button text="SlideInOnTop" @tap="onSlideInOnTopTransitionTap" row="0" col="0"/>
          <Button text="Fade" @tap="onFadeTransitionTap" row="0" col="1"/>
          <Button text="Push" @tap="onPushTransitionTap" row="1" col="0"/>
          <Button text="Reveal" @tap="onRevealTransitionTap" row="1" col="1"/>
          <Button text="ReverseSlideOut" @tap="onReverseSlideOutTransitionTap" row="2" col="0"/>
          <Button text="ScaleDownPusher" @tap="onScaleDownPusherTransitionTap" row="2" col="1"/>
          <Button text="ScaleUp" @tap="onScaleUpTransitionTap" row="3" col="0"/>
          <Button text="SlideAlong" @tap="onSlideAlongTransitionTap" row="3" col="1"/>
      </GridLayout>
      <ListView ref="listView"
          row="1"
          for="example in examples"
          separatorColor="transparent"
          @itemTap="goToExample">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="example.description" class="titleLabel"></Label>
            <StackLayout height="1" backgroundColor="#EEEEEE"></StackLayout>
          </StackLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </Page>
  `,
  data() {
    return {
      examples: getExamples(),
    };
  },
  methods: {
    goToExample({ item }) {
      this.$navigateTo(item);
    },
    onNavBtnTap() {
      let rootDrawer = getRootView() as RadSideDrawer;
      if (rootDrawer) {
        rootDrawer.toggleDrawerState();
      }
    },
    printTransition(transition: string) {
    },
    onFadeTransitionTap() {
      let rootDrawer = getRootView() as RadSideDrawer;
      rootDrawer.drawerTransition = new FadeTransition();
      console.log("Changed drawer transition to FadeTransition");
    },
    onPushTransitionTap() {
      let rootDrawer = getRootView() as RadSideDrawer;
      rootDrawer.drawerTransition = new PushTransition();
      console.log("Changed drawer transition to PushTransition");
    },
    onRevealTransitionTap() {
      let rootDrawer = getRootView() as RadSideDrawer;
      rootDrawer.drawerTransition = new RevealTransition();
      console.log("Changed drawer transition to RevealTransition");
    },
    onReverseSlideOutTransitionTap() {
      let rootDrawer = getRootView() as RadSideDrawer;
      rootDrawer.drawerTransition = new ReverseSlideOutTransition();
      console.log("Changed drawer transition to ReverseSlideOutTransition");
    },
    onScaleDownPusherTransitionTap() {
      let rootDrawer = getRootView() as RadSideDrawer;
      rootDrawer.drawerTransition = new ScaleDownPusherTransition();
      console.log("Changed drawer transition to ScaleDownPusherTransition");
    },
    onScaleUpTransitionTap() {
      let rootDrawer = getRootView() as RadSideDrawer;
      rootDrawer.drawerTransition = new ScaleUpTransition();
      console.log("Changed drawer transition to ScaleUpTransition");
    },
    onSlideAlongTransitionTap() {
      let rootDrawer = getRootView() as RadSideDrawer;
      rootDrawer.drawerTransition = new SlideAlongTransition();
      console.log("Changed drawer transition to SlideAlongTransition");
    },
    onSlideInOnTopTransitionTap() {
      let rootDrawer = getRootView() as RadSideDrawer;
      rootDrawer.drawerTransition = new SlideInOnTopTransition();
      console.log("Changed drawer transition to SlideInOnTopTransition");
    }
  }
};
