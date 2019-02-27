import { AppiumDriver, createDriver, SearchOptions, Direction } from "nativescript-dev-appium";
import { expect } from "chai";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { navigateBackToHome, scrollToElement, swipeToElement, QUEUE_WAIT_TIME } from "./helper";
const fs = require('fs');
const addContext = require('mochawesome/addContext');
const rimraf = require('rimraf');
const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");
const PR = " #PR1";

describe("ListView1", () => {
    let driver: AppiumDriver;

    before(async function () {
        this.timeout(QUEUE_WAIT_TIME);
        driver = await createDriver();
        driver.defaultWaitTime = 15000;
        let dir = "mochawesome-report";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        rimraf('mochawesome-report/*', function () { });
    });

    after(async () => {
        if (isSauceRun) {
            driver.sessionId().then(function (sessionId) {
                console.log("Report https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state && this.currentTest.state === "failed") {
            let png = await driver.logScreenshot(this.currentTest.title);
            fs.copyFile(png, './mochawesome-report/' + this.currentTest.title + '.png', function (err) {
                if (err) {
                    throw err;
                }
                console.log('Screenshot saved.');
            });
            addContext(this, './' + this.currentTest.title + '.png');
        }
    });

    const gettingStartedText = "Getting Started";
    describe(gettingStartedText, () => {
        it("Navigate to Getting Started example", async () => {
            await scrollToElement(driver, gettingStartedText);
            const gettingStarted = await driver.findElementByText("Getting Started", SearchOptions.exact);
            await gettingStarted.click();

            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;
        });

        it("Verify ListView length", async () => {
            const items = await driver.findElementsByText("description", SearchOptions.contains);
            expect(items.length).to.equal(10);

        });

        it("Verify items are visible", async () => {
            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;

            const item2 = await driver.findElementByText("Item 2", SearchOptions.exact);
            expect(item2).to.exist;

            const item3 = await driver.findElementByText("Item 3", SearchOptions.exact);
            expect(item3).to.exist;

            const item4 = await driver.findElementByText("Item 4", SearchOptions.exact);
            expect(item4).to.exist;
        });
    });

    const gettingStartedHorizontalText = "Getting Started Horizontal";
    describe(gettingStartedHorizontalText, () => {
        it("Navigate to Getting Started Horizontal example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, gettingStartedHorizontalText);
            const gettingStartedHorizontal = await driver.findElementByText(gettingStartedHorizontalText, SearchOptions.exact);
            await gettingStartedHorizontal.click();

            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;
            const description = await driver.findElementByText("Item 1 description", SearchOptions.contains);
            expect(description).to.exist;
        });

        it("Scroll to Item 5", async () => {
            let direction = Direction.left;
            let item = "Item 5";
            if (isAndroid) {
                direction = Direction.right;
                item = "Item 19";
            }
            const expectedItem = await swipeToElement(driver, item, direction);
            expect(expectedItem).to.exist;
        });
    });

    describe("Grid" + PR, () => {
        it("Navigate to Grid Layout example", async () => {
            await navigateBackToHome(driver);
            const grid = await driver.findElementByText("Grid Layout", SearchOptions.exact);
            await grid.click();

            const rollsLabel = await driver.findElementByText("Item 6", SearchOptions.exact);
            expect(rollsLabel).to.exist;
        });

        it("Scroll listview to verify more elements are present", async () => {
            const item18 = await scrollToElement(driver, "Item 19");
            expect(item18).to.exist;
        });
    });

    describe("Staggered" + PR, () => {
        it("Navigate to Staggered example", async () => {
            await navigateBackToHome(driver);
            const staggeredItem = await driver.findElementByText("Staggered Layout", SearchOptions.exact);
            await staggeredItem.click();

            const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
            expect(item0).to.exist;
        });
    });

    const itemAnimationsText = "Item Animations";
    describe(itemAnimationsText + PR, () => {
        it("Navigate to Item Animations example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, itemAnimationsText);
            const itemAnimataions = await driver.findElementByText(itemAnimationsText, SearchOptions.exact);
            await itemAnimataions.click();

            const addBtn = await driver.findElementByText("ADD", SearchOptions.exact);
            expect(addBtn).to.exist;
        });

        it("Verify Buttons on the page are responsive", async () => {
            const addBtn = await driver.findElementByText("ADD", SearchOptions.exact);
            expect(addBtn).to.exist;
            const delBtn = await driver.findElementByText("DEL", SearchOptions.exact);
            expect(delBtn).to.exist;
            const updateBtn = await driver.findElementByText("UPDATE", SearchOptions.contains);
            expect(updateBtn).to.exist;
            const resetBtn = await driver.findElementByText("RESET", SearchOptions.exact);
            expect(resetBtn).to.exist;

            await addBtn.click();
            let item0 = await driver.findElementByText("This is a new item: 0", SearchOptions.exact);
            expect(item0).to.exist;
            await delBtn.click();
            item0 = await driver.findElementByTextIfExists("This is a new item: 0", SearchOptions.exact);
            expect(item0).to.be.undefined;

            await addBtn.click();
            let item1 = await driver.findElementByText("This is a new item: 1", SearchOptions.exact);
            expect(item1).to.exist;
            await updateBtn.click();
            let itemUpdated = await driver.findElementByText("This is an updated item", SearchOptions.exact);
            expect(itemUpdated).to.exist;
        });
    });

    const pullToRefreshText = "Pull To Refresh";
    describe(pullToRefreshText + PR, () => {
        it("Navigate to Pull to Refresh example", async () => {
            await navigateBackToHome(driver);
            const listItem = await scrollToElement(driver, pullToRefreshText);
            await listItem.click();
            const header = await driver.findElementByText(pullToRefreshText, SearchOptions.exact);
            expect(header).to.exist;
        });

        it("Pull the listView down to refresh items", async () => {
            const item = await driver.findElementByText("Apple", SearchOptions.exact);
            await item.scroll(Direction.up, 600);
            const itemNew = await driver.findElementByText("Berry", SearchOptions.exact);
            expect(itemNew).to.exist;
            const footer = await driver.findElementByText("List with 4 items", SearchOptions.exact);
            expect(footer).to.exist;
        });
    });

    const itemLoadingText = "Item Loading";
    describe(itemLoadingText + PR, () => {
        it("Navigate to Item Loading example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, itemLoadingText);
            const itemLoading = await driver.findElementByText(itemLoadingText, SearchOptions.exact);
            await itemLoading.click();

            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;
            const item2 = await driver.findElementByText("Item 2", SearchOptions.exact);
            expect(item2).to.exist;
        });
    });

    const itemReorderText = "Item Reorder";
    describe(itemReorderText + PR, () => {
        it("Navigate to item reorder example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, itemReorderText);
            const itemReorder = await driver.findElementByText(itemReorderText, SearchOptions.exact);
            await itemReorder.click();
            const title = await driver.findElementByText("Item Reorder", SearchOptions.exact);
            expect(title).to.exist;
        });

        it("Reorder items and verify listview", async () => {
            let listView;
            let value;
            const listItem = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(listItem).to.exist;
            const item1 = await listItem.getRectangle();
            const item1x = item1.x + item1.width / 2;
            const item1y = item1.y + item1.height / 2;
            // await listItem.drag(Direction.down, 600, 0);
            if (isAndroid) {
                const wd = driver.wd();
                const action = new wd.TouchAction(driver.driver);
                action.longPress({ x: item1x, y: item1y })
                    .wait(2000)
                    .moveTo({ x: item1x, y: 400 })
                    .release();
                await action.perform();
                listView = await driver.findElementsByClassName("android.widget.TextView");
                value = await listView[1].text();
                expect(value).to.equal("Item 2");
            }
            else {
                await driver.driver.execute('mobile: dragFromToForDuration', {
                    duration: 2.0,
                    fromX: item1x,
                    fromY: item1y,
                    toX: item1x,
                    toY: 242
                });
                let element = await driver.findElementByText("Item 1");
                expect(element).to.exist;
                const item1Rectangle = await element.getRectangle();
                listView = await driver.findElementsByClassName("XCUIElementTypeStaticText");
                const firstListViewItem = await listView[1].getRectangle();
                const areEqual = (item1Rectangle.x !== firstListViewItem.x) && (item1Rectangle.y !== firstListViewItem.y);
                expect(areEqual).to.be.true;
            }
        });
    });
});