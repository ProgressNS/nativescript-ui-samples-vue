import { AppiumDriver, createDriver, SearchOptions, Direction, UIElement, Point } from "nativescript-dev-appium";
import { isSauceLab, runType, capabilitiesName } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import "./helper";
import { navigateToView, navigateToHome } from "./helper";
import { ImageOptions } from "nativescript-dev-appium/lib/image-options";
const fs = require('fs');
const addContext = require('mochawesome/addContext');
const rimraf = require('rimraf');
const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("Chart2", async () => {
    const legendText = "Legend";
    const interactionText = "Interaction";
    const axesText = "Axes";
    const annotationsText = "Annotations";
    const animationTime = 2000;
    let driver: AppiumDriver;

    before(async () => {
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
                console.log("Report: https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        await driver.quit();
        console.log("Driver quits!");
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

    describe(legendText, async () => {
        it("should open Legend", async () => {
            await navigateToHome(driver);
            const legendButton = await driver.findElementByText(legendText);
            await legendButton.click();
            const legendTitle = await driver.findElementByText(legendText);
            expect(legendTitle).to.exist;
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("legend", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should select Area series chart", async () => {
            const areaSeriesLabel = await driver.findElementByText("Area series");
            await areaSeriesLabel.click();
            const isTrue = await driver.compareScreen("legend-area-selected", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
    });

    describe(interactionText, async () => {
        it("should open Pan and Zoom", async () => {
            await navigateToHome(driver);
            const interactionButton = await driver.findElementByText(interactionText);
            await interactionButton.click();
            const interactionTitle = await driver.findElementByText(interactionText);
            expect(interactionTitle).to.exist;
            const panAndZoomButton = await driver.findElementByText("Pan & Zoom");
            await panAndZoomButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("pan-and-zoom", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Pie selection", async () => {
            await navigateToView(driver, interactionText);
            const pieSelectionButton = await driver.findElementByText("Pie Selection");
            await pieSelectionButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("pie-selection", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
            if (!isAndroid) {
                const label4 = await driver.findElementByText("Series 4");
                expect(label4).to.exist;
            }
        });
        it("should open Trackball", async () => {
            await navigateToView(driver, interactionText);
            const trackballButton = await driver.findElementByText("Trackball");
            await trackballButton.click();
            await driver.wait(animationTime);
            // TODO reduce compare pixesls to 50 when https://github.com/NativeScript/nsplugins-internal/issues/154 is fixed
            const isTrue = await driver.compareScreen("trackball", 3, 250, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Series selection", async () => {
            await navigateToView(driver, interactionText);
            const seriesSelectionButton = await driver.findElementByText("Series Selection");
            await seriesSelectionButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("series-selection", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Datapoint selection", async () => {
            await navigateToView(driver, interactionText);
            const datapointSelectionButton = await driver.findElementByText("Datapoint Selection");
            await datapointSelectionButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("datapoint-selection", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
    });

    describe(axesText, async () => {
        it("should open Customization", async () => {
            await navigateToHome(driver);
            const axesButton = await driver.findElementByText(axesText);
            await axesButton.click();
            const axesTitle = await driver.findElementByText(axesText);
            expect(axesTitle).to.exist;
            const customizationButton = await driver.findElementByText("Customization");
            await customizationButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("customization", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Multiple axes", async () => {
            await navigateToView(driver, axesText);
            const multipleAxesButton = await driver.findElementByText("Multiple Axes");
            await multipleAxesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("multiple-axes", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Negative values", async () => {
            await navigateToView(driver, axesText);
            const negativeValuesButton = await driver.findElementByText("Negative Values");
            await negativeValuesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("negative-values", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Date time axis", async () => {
            await navigateToView(driver, axesText);
            const dateTimeAxisButton = await driver.findElementByText("DateTime Axis");
            await dateTimeAxisButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("date-time-axis", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Label visibility", async () => {
            await navigateToView(driver, axesText);
            const labelVisibilityButton = await driver.findElementByText("Label Visibility");
            await labelVisibilityButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("label-visibility", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
    });

    describe(annotationsText, async () => {
        it("should open Plot band", async () => {
            await navigateToHome(driver);
            const annotationsButton = await driver.findElementByText(annotationsText);
            await annotationsButton.click();
            const annotationsTitle = await driver.findElementByText(annotationsText);
            expect(annotationsTitle).to.exist;
            const plotBandButton = await driver.findElementByText("Plot Band");
            await plotBandButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("plot-band", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Grid line", async () => {
            await navigateToView(driver, annotationsText);
            const gridLineButton = await driver.findElementByText("Grid Line");
            await gridLineButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("grid-line", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
    });
});