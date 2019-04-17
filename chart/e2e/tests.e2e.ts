import { AppiumDriver, createDriver, SearchOptions, Direction, UIElement, Point } from "nativescript-dev-appium";
import { isSauceLab, runType, capabilitiesName } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import "./helper";
import { navigateToView, navigateToHome, scrollToElement } from "./helper";
import { ImageOptions } from "nativescript-dev-appium/lib/image-options";
const fs = require('fs');
const addContext = require('mochawesome/addContext');
const rimraf = require('rimraf');
const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("Chart1", () => {
    const seriesText = "Series";
    const stylingText = "Styling";
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
    describe(seriesText, () => {
        it("should open Bar series", async () => {
            const seriesButton = await driver.findElementByText(seriesText);
            await seriesButton.click();
            const seriesTitle = await driver.findElementByText(seriesText);
            expect(seriesTitle).to.exist;
            const barSeriesButton = await driver.findElementByText("Bar Series");
            await barSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("bar-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        // TODO enable for iOS when https://github.com/NativeScript/nsplugins-internal/issues/154 is fixed
        if (isAndroid) {
            it("should open Range Bar series", async () => {
                await navigateToView(driver, seriesText);
                const rangeBarSeriesButton = await driver.findElementByText("Range Bar Series");
                await rangeBarSeriesButton.click();
                await driver.wait(animationTime);
                const isTrue = await driver.compareScreen("range-bar-series", 3, 50, ImageOptions.pixel);
                expect(isTrue).to.be.true;
            });
        }
        it("should open Stacked Bar series", async () => {
            await navigateToView(driver, seriesText);
            const stackedBarSeriesButton = await driver.findElementByText("Stacked Bar Series");
            await stackedBarSeriesButton.click();
            await driver.wait(2000);
            const isTrue = await driver.compareScreen("stacked-bar-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Area series", async () => {
            await navigateToView(driver, seriesText);
            const areaSeriesButton = await driver.findElementByText("Area Series");
            await areaSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("area-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Stacked Area series", async () => {
            await navigateToView(driver, seriesText);
            const stackedAreaSeriesButton = await driver.findElementByText("Stacked Area Series");
            await stackedAreaSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("stacked-area-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Line series", async () => {
            await navigateToView(driver, seriesText);
            const lineSeriesButton = await driver.findElementByText("Line Series");
            await lineSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("line-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Spline series", async () => {
            await navigateToView(driver, seriesText);
            const splineAreaSeriesButton = await driver.findElementByText("Spline Series");
            await splineAreaSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("spline-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Spline Area series", async () => {
            await navigateToView(driver, seriesText);
            const splineSeriesButton = await driver.findElementByText("Spline Area Series");
            await splineSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("spline-area-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        // TODO enable for iOS when https://github.com/NativeScript/nsplugins-internal/issues/154 is fixed
        if (isAndroid) {
            it("should open Bubble series", async () => {
                await navigateToView(driver, seriesText);
                const bubbleSeriesButton = await driver.findElementByText("Bubble Series");
                await bubbleSeriesButton.click();
                await driver.wait(animationTime);
                const isTrue = await driver.compareScreen("bubble-series", 3, 50, ImageOptions.pixel);
                expect(isTrue).to.be.true;
            });
        }
        it("should open Scatter Bubble series", async () => {
            await navigateToView(driver, seriesText);
            const scatterBubbleSeriesButton = await scrollToElement(driver, "Scatter Bubble Series");
            await scatterBubbleSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("scatter-bubble-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        // TODO enable for iOS when https://github.com/NativeScript/nsplugins-internal/issues/154 is fixed
        if (isAndroid) {
            it("should open Candlestick series", async () => {
                await navigateToView(driver, seriesText);
                const candlestickSeriesButton = await scrollToElement(driver, "Candlestick Series");
                await candlestickSeriesButton.click();
                await driver.wait(animationTime);
                // TODO reduce compare pixesls to 50 when https://github.com/NativeScript/nsplugins-internal/issues/154 is fixed
                const isTrue = await driver.compareScreen("candlestick-series", 3, 250, ImageOptions.pixel);
                expect(isTrue).to.be.true;
            });
        }
        // TODO enable for iOS when https://github.com/NativeScript/nsplugins-internal/issues/154 is fixed
        if (isAndroid) {
            it("should open Ohlc series", async () => {
                await navigateToView(driver, seriesText);
                const ohlcSeriesButton = await scrollToElement(driver, "Ohlc Series");
                await ohlcSeriesButton.click();
                await driver.wait(animationTime);
                // TODO reduce compare pixesls to 50 when https://github.com/NativeScript/nsplugins-internal/issues/154 is fixed
                const isTrue = await driver.compareScreen("ohlc-series", 3, 250, ImageOptions.pixel);
                expect(isTrue).to.be.true;
            });
        }
        it("should open Pie series", async () => {
            await navigateToView(driver, seriesText);
            const pieSeriesButton = await scrollToElement(driver, "Pie Series");
            await pieSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("pie-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Scatter series", async () => {
            await navigateToView(driver, seriesText);
            const scatterSeriesButton = await scrollToElement(driver, "Scatter Series");
            await scatterSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("scatter-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
    });

    describe(stylingText, () => {
        it("should open Styling axes", async () => {
            await navigateToHome(driver);
            const stylingButton = await driver.findElementByText(stylingText);
            await stylingButton.click();
            const stylingTitle = await driver.findElementByText(stylingText);
            expect(stylingTitle).to.exist;
            const stylingAxesButton = await driver.findElementByText("Styling Axes");
            await stylingAxesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-axes", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Styling series", async () => {
            await navigateToView(driver, stylingText);
            const stylingSeriesButton = await driver.findElementByText("Styling Series");
            await stylingSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Styling Pie charts series", async () => {
            await navigateToView(driver, stylingText);
            const pieChartSeriesButton = await driver.findElementByText("Styling Pie Series");
            await pieChartSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-pie-series", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Styling grid", async () => {
            await navigateToView(driver, stylingText);
            const stylingGridButton = await driver.findElementByText("Styling Grid");
            await stylingGridButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-grid", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Styling labels", async () => {
            await navigateToView(driver, stylingText);
            const stylingLabelsButton = await driver.findElementByText("Styling Labels");
            await stylingLabelsButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-labels", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Styling ticks", async () => {
            await navigateToView(driver, stylingText);
            const stylingTicksButton = await driver.findElementByText("Styling Ticks");
            await stylingTicksButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-ticks", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
        it("should open Styling series selection", async () => {
            await navigateToView(driver, stylingText);
            const stylingSeriesSelectionButton = await driver.findElementByText("Styling Series Selection");
            await stylingSeriesSelectionButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-series-selection", 3, 50, ImageOptions.pixel);
            expect(isTrue).to.be.true;
        });
    });
});