import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { expect } from "chai";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { navigateBackToHome, scrollToElement, QUEUE_WAIT_TIME, } from "./helper";
const fs = require('fs');
const addContext = require('mochawesome/addContext');
const rimraf = require('rimraf');
const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");
const PR = " #PR2";

describe("ListView2", () => {
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

    const itemSelectionText = "Item Selection";
    describe(itemSelectionText + PR, () => {
        it("Navigate to Item selection example", async () => {
            await navigateBackToHome(driver);
            const multipleSelection = await scrollToElement(driver, itemSelectionText);
            await multipleSelection.click();
            const header = await driver.findElementByText(itemSelectionText, SearchOptions.exact);
            expect(header).to.exist;
        });
        it("Select an item and verify it is marked as selected", async () => {
            const item = await driver.findElementByText("Item 1", SearchOptions.exact);
            await item.click();
            const locator = isAndroid ? "android.view.ViewGroup" : "XCUIElementTypeCell";
            const items = await driver.findElementsByClassName(locator);
            const selected = isAndroid ? items[4] : items[0];
            expect(selected).to.exist;
            const selection = await driver.compareElement(selected, "selectedItem");
            expect(selection).to.equal(true);
        });
    });

    const multipleItemTemplatesText = "Multiple Templates";
    describe(multipleItemTemplatesText + PR, () => {
        it("Navigate to Multiple Templates selector example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, multipleItemTemplatesText);
            const multipleItemTemplates = await driver.findElementByText(multipleItemTemplatesText, SearchOptions.exact);
            await multipleItemTemplates.click();

            const item0 = await driver.findElementByText("Item 1 selector", SearchOptions.exact);
            expect(item0).to.exist;
        });

        it("Verify ListView elements are visible", async () => {
            const redItems = await driver.findElementsByText("red", SearchOptions.exact);
            expect(redItems.length).to.equal(2);

            const blueItems = await driver.findElementsByText("blue", SearchOptions.exact);
            expect(blueItems.length).to.equal(2);

            const greenItems = await driver.findElementsByText("green", SearchOptions.exact);
            expect(greenItems.length).to.equal(2);
        });

        it("Navigate to Multiple Templates 'if' example", async () => {
            const multipleItemTemplates = await driver.findElementByText("v-template if", SearchOptions.exact);
            await multipleItemTemplates.click();

            const item0 = await driver.findElementByText("Item 1 if template", SearchOptions.exact);
            expect(item0).to.exist;
        });

        it("Verify ListView elements are visible", async () => {
            const redItems = await driver.findElementsByText("red", SearchOptions.exact);
            expect(redItems.length).to.equal(2);

            const blueItems = await driver.findElementsByText("blue", SearchOptions.exact);
            expect(blueItems.length).to.equal(2);

            const greenItems = await driver.findElementsByText("green", SearchOptions.exact);
            expect(greenItems.length).to.equal(2);
        });
    });

    describe("Scroll to item" + PR, () => {
        it("Initially scroll to item", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, swipeActionText);
            const scrollToItem = await scrollToElement(driver, "Scroll To Item");
            await scrollToItem.click();

            const scrollLabel = await driver.findElementByText("Scrolled to", SearchOptions.contains);
            expect(scrollLabel).to.exist;
            const item20 = await driver.findElementByText("Item 50", SearchOptions.exact);
            expect(item20).to.exist;
        });
    });

    const swipeActionText = "Swipe Actions";
    describe(swipeActionText + PR, () => {
        it("Navigate to Swipe Actions example", async () => {
            await navigateBackToHome(driver);
            const listItem = await scrollToElement(driver, swipeActionText);
            await listItem.click();
            const title = await driver.findElementByText(swipeActionText, SearchOptions.exact);
            expect(title).to.exist;
        });

        it("Swipe item left, delete it and verify it is deleted", async () => {
            let item = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item).to.exist;
            const rectangle = await item.getRectangle();
            const centerX = rectangle.x + rectangle.width / 2;
            const centerY = rectangle.y + rectangle.height / 2;
            if (isAndroid) {
                const wd = driver.wd();
                const action = new wd.TouchAction(driver.driver);
                action.press({ x: centerX, y: centerY })
                    .wait(150)
                    .moveTo({ x: 10, y: centerY })
                    .release();
                await action.perform();
            }
            else {
                await driver.driver.execute('mobile: dragFromToForDuration', {
                    duration: 2.0,
                    fromX: centerX,
                    fromY: centerY,
                    toX: 50,
                    toY: centerY
                });
            }
            await driver.wait(1000);
            let delBtn = await driver.findElementByText("delete", SearchOptions.exact);
            await delBtn.click();
            await driver.wait(1000);
            item = await driver.findElementByTextIfExists("Item 1", SearchOptions.exact);
            expect(item).to.be.undefined;
        });

        it("Swipe item right and verify button is present", async () => {
            let item = await driver.findElementByText("Item 2", SearchOptions.exact);
            expect(item).to.exist;
            const rectangle = await item.getRectangle();
            const centerX = rectangle.x + rectangle.width / 2;
            const centerY = rectangle.y + rectangle.height / 2;
            if (isAndroid) {
                const wd = driver.wd();
                const action = new wd.TouchAction(driver.driver);
                action.press({ x: centerX, y: centerY })
                    .wait(200)
                    .moveTo({ x: centerX + centerX / 2, y: centerY })
                    .release();
                await action.perform();
            }
            else {
                await driver.driver.execute('mobile: dragFromToForDuration', {
                    duration: 2.0,
                    fromX: centerX,
                    fromY: centerY,
                    toX: centerX + centerX / 2,
                    toY: centerY
                });
            }
            let markBtn = await driver.findElementByText("mark", SearchOptions.exact);
            expect(markBtn).to.exist;
        });
    });
});