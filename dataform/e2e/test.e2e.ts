import { AppiumDriver, createDriver, SearchOptions, UIElement, Locator } from "nativescript-dev-appium";
import { expect } from "chai";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { navigateToHome, clickBelowElementCenter } from "./helper";
import { ImageOptions } from "nativescript-dev-appium/lib/image-options";

const isSauceRun = isSauceLab;
const isAndroid: Boolean = runType.includes("android");

describe("DataForm", () => {
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = 10000;
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
        if (this.currentTest.state === "failed") {
            await driver.logScreenshot(this.currentTest.title);
        }
    });

    describe("Getting Started", () => {
        it("Navigate to Getting started example", async () => {
            await navigateToHome(driver);
            const item = await driver.findElementByText("Getting Started", SearchOptions.exact);
            await item.click();

            const title = await driver.findElementByText("Getting Started", SearchOptions.exact);
            expect(title).to.exist;
        });

        it("Verify data-form components are visible", async () => {
            if (isAndroid) {
                const ageLabel = await driver.findElementByText("23", SearchOptions.exact);
                expect(ageLabel).to.exist;

                const email = await driver.findElementByText("john@company.com", SearchOptions.exact);
                expect(email).exist;

                const streetLabel = await driver.findElementByText("11", SearchOptions.exact);
                expect(streetLabel).to.exist;
            }

            else {
                const incrementBtn = await driver.findElementByXPath("(//XCUIElementTypeButton[@name=\"Increment\"])[1]");
                await incrementBtn.click();

                const ageLabel = await driver.findElementByAccessibilityId("24");
                expect(ageLabel).to.exist;

                const email = await driver.findElementByText("john@company.com", SearchOptions.exact);
                expect(email).exist;

                const incrementBtn2 = await driver.findElementByXPath("(//XCUIElementTypeButton[@name=\"Decrement\"])[2]");
                await incrementBtn2.click();
                const streetLabel = await driver.findElementByAccessibilityId("10");
                expect(streetLabel).to.exist;
            }
        });
    });

    describe("Properties", () => {
        it("Navigate to Properties example", async () => {
            await navigateToHome(driver);
            const item = await driver.findElementByText("Properties", SearchOptions.exact);
            await item.click();

            const title = await driver.findElementByText("Properties", SearchOptions.exact);
            expect(title).to.exist;
        });

        it("Verify data-form components are visible", async () => {
            const nameLabel = await driver.findElementByText("Name", SearchOptions.exact);
            expect(nameLabel).to.exist;
            let nameValue = await driver.findElementByText("John", SearchOptions.exact);
            expect(nameValue).to.exist;
            await nameValue.sendKeys("1");
            nameValue = await driver.findElementByText("John1");
            expect(nameValue).to.exist;
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }

            const ageLabel = await driver.findElementByText("Age", SearchOptions.exact);
            expect(ageLabel).to.exist;
            let ageNumber = await driver.findElementByText("23", SearchOptions.exact);
            expect(ageNumber).to.exist;
            await ageNumber.sendKeys("4");
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }
            ageNumber = await driver.findElementByText("234", SearchOptions.exact);
            expect(ageNumber).to.exist;

            const email = await driver.findElementByText("john@company.com", SearchOptions.exact);
            expect(email).exist;

            const streetName = await driver.findElementByText("Street Name", SearchOptions.exact);
            expect(streetName).to.exist;
            const streetNameValue = await driver.findElementByText("5th Avenue", SearchOptions.exact);
            expect(streetNameValue).to.exist;
        });
    });

    describe("Editors JSON", () => {
        it("Navigate to Editors JSON example", async () => {
            await navigateToHome(driver);
            const item = await driver.findElementByText("Editors", SearchOptions.exact);
            await item.click();
            let title = await driver.findElementByText("Editors", SearchOptions.exact);
            expect(title).to.exist;
            let movieTitle;
            if (isAndroid) {
                movieTitle = await driver.findElementByText("Zootopia", SearchOptions.exact);
            }
            else {
                movieTitle = await driver.findElementByAccessibilityId("Zootopia", SearchOptions.exact);
            }
            expect(movieTitle).to.exist;
        });

        it("Verify data-form components are visible and responsive", async () => {
            let date;
            let month;
            let day: UIElement;
            if (isAndroid) {
                date = await driver.findElementByText("Wed, 06.04", SearchOptions.exact);
                await date.click();
                if (runType.includes("android27") || runType.includes("android23")) {
                    month = await driver.findElementByText("Apr", SearchOptions.exact);
                    day = await driver.findElementByText("06", SearchOptions.exact);
                }
                if (runType.includes("android24")) {
                    month = await driver.findElementByText("Wed, Apr 6", SearchOptions.contains);
                    day = await driver.findElementByText("6", SearchOptions.exact);
                }
            }
            else {
                date = await driver.findElementByAccessibilityId("Apr 6, 2016", SearchOptions.exact);
                await date.click();
                month = await driver.findElementByText("April", SearchOptions.exact);
                day = await driver.findElementByText("6", SearchOptions.exact);
            }
            expect(date).to.exist;
            expect(day).to.exist;
            expect(month).to.exist;

            if (isAndroid) {
                if (runType.includes("android23")) {
                    const seven = await driver.findElementByText("07", SearchOptions.exact);
                    await seven.click();
                } else {
                    const seven = await driver.findElementByText("7", SearchOptions.exact);
                    await seven.click();
                }
                const ok = await driver.findElementByText("OK", SearchOptions.exact);
                await ok.click();
                date = await driver.findElementByText("Thu, 07.04", SearchOptions.exact);
                expect(date).to.exist;
            } else {
                await clickBelowElementCenter(day, driver);
                date = await driver.findElementByAccessibilityId("Apr 7, 2016", SearchOptions.exact);
                await date.click();
            }
        });
    });

    describe("Editors styles", () => {
        it("Navigate to Editors styles page", async () => {
            await navigateToHome(driver);
            const autocompleteTitle = await driver.findElementByText("Editors styles", SearchOptions.exact);
            await autocompleteTitle.click();
        });

        it("Verify data-form components are visible", async () => {
            const changeStylesButton = await driver.findElementByText("Change styles");
            await changeStylesButton.click();
            await driver.wait(500);
            const result = await driver.compareScreen("editor-styles", 5, 50, ImageOptions.pixel);
            expect(result).to.be.true;
        });
    });

    describe("Editors AutoComplete", () => {
        it("Navigate to Autocomplete editor page", async () => {
            await navigateToHome(driver);
            const autocompleteTitle = await driver.findElementByText("Autocomplete", SearchOptions.exact);
            await autocompleteTitle.click();
        });

        it("Verify data-form components are visible", async () => {
            let from = await driver.findElementByText("From:", SearchOptions.exact);
            expect(from).to.exist;

            let to = await driver.findElementByText("To:", SearchOptions.exact);
            expect(to).to.exist;

            const textFields = await driver.findElementsByClassName(driver.locators.getElementByName("textfield"));
            let fromField = textFields[0];
            await fromField.click();
            await fromField.sendKeys("Al");
            const alertCity = await driver.findElementByText("Alert", SearchOptions.contains);
            await alertCity.click();
            const alertCityToken = await driver.findElementByText("Alert, YLT", SearchOptions.contains);
            expect(alertCityToken).to.exist;

            const toField = textFields[1];
            await toField.click();
            await toField.sendKeys("Wa");
            const washingtonCity = await driver.findElementByText("Washington", SearchOptions.contains);
            await washingtonCity.click();
            const washingtonCityToken = await driver.findElementByText("Washington");
            expect(washingtonCityToken).to.exist;
        });
    });

    describe("Validation", () => {
        it("Navigate to Validatotion page", async () => {
            await navigateToHome(driver);
            const validationTitle = await driver.findElementByText("Validation", SearchOptions.exact);
            await validationTitle.click();
            const usernameLabel = await driver.findElementByText("Nick", SearchOptions.exact);
            expect(usernameLabel).to.exist;
        });

        it("Verify data-form components are visible", async () => {
            const emailLabel = await driver.findElementByText("E-Mail", SearchOptions.exact);
            expect(emailLabel).to.exist;

            const passwordLabel = await driver.findElementByText("Password", SearchOptions.exact);
            expect(passwordLabel).to.exist;

            const password2Label = await driver.findElementByText("Repeat Password", SearchOptions.exact);
            expect(password2Label).to.exist;

            const ageLabel = await driver.findElementByText("Age", SearchOptions.exact);
            expect(ageLabel).to.exist;

            const agreeLabel = await driver.findElementByText("Agree Terms", SearchOptions.exact);
            expect(agreeLabel).to.exist;
        });

        it("Verify validation of components", async () => {
            let fields;
            let username;
            let password;
            let password2;
            let email;
            let incrementBtn;
            const nickLabel = await driver.findElementByText("Nick");
            await nickLabel.click();
            const mailLabel = await driver.findElementByText("E-Mail");
            await mailLabel.click();
            const passLabel = await driver.findElementByText("Password");
            await passLabel.click();
            const pass2Label = await driver.findElementByText("Repeat Password");
            await pass2Label.click();
            const ageLabel = await driver.findElementByText("Age");
            await ageLabel.click();
            const agreeLabel = await driver.findElementByText("Agree Terms");
            await agreeLabel.click();
            if (isAndroid) {
                await agreeLabel.click();
            }
            await nickLabel.click();

            let noValue = await driver.findElementByText("cannot be empty", SearchOptions.contains);
            expect(noValue).to.exist;
            let wrongMail = await driver.findElementByText("@telerik", SearchOptions.contains);
            expect(wrongMail).to.exist;
            let wrongAge = await driver.findElementByText("Age must be between 1-100.");
            expect(wrongAge).to.exist;
            let noTerm = await driver.findElementByText("This value is not valid.");
            expect(noTerm).to.exist;

            fields = await driver.findElementsByClassName(driver.locators.getElementByName("textfield"));
            username = fields[0];
            email = fields[1];

            if (isAndroid) {
                password = fields[2];
                password2 = fields[3];
                const age = await driver.findElementByText("Age");
                await age.click();
                await age.sendKeys("1");
            } else {
                const secureFields = await driver.findElementsByClassName(driver.locators.getElementByName("securetextfield"));
                password = secureFields[0];
                password2 = secureFields[1];
                incrementBtn = await driver.findElementByXPath("(//XCUIElementTypeButton[@name=\"Increment\"])[1]");
                await incrementBtn.click();
            }

            await username.sendKeys("admin");
            await email.sendKeys("az@telerik.com");
            await password.sendKeys("123456");
            await password2.sendKeys("1234567");
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }
            let switchButton;
            if (isAndroid) {
                switchButton = await driver.findElementByClassName("android.widget.CheckBox");
            } else {
                switchButton = await driver.findElementByClassName(driver.locators.getElementByName("switch"));
            }
            await switchButton.click();
            noValue = await driver.findElementByTextIfExists("cannot be empty!");
            wrongMail = await driver.findElementByTextIfExists("provide your @telerik.com", SearchOptions.contains);
            wrongAge = await driver.findElementByTextIfExists("Age must be between 1-100.");
            noTerm = await driver.findElementByTextIfExists("This value is not valid.");
            expect(noValue).to.be.undefined;
            expect(wrongMail).to.be.undefined;
            expect(wrongAge).to.be.undefined;
            expect(noTerm).to.be.undefined;
            const loginButton = await driver.findElementByText("Login");
            await loginButton.click();
            const wrongUser = await driver.findElementByText("Use admin1 as username.");
            expect(wrongUser).to.exist;
            const wrongPass = await driver.findElementByText("Password is not the same as above.");
            expect(wrongPass).to.exist;

        });
    });

    describe("Validation Modes", () => {
        it("Navigate to Validation Modes Immediate tab", async () => {
            await navigateToHome(driver);
            const validationModes = await driver.findElementByText("Validation Modes", SearchOptions.exact);
            await validationModes.click();
        });

        it("Verify Immediate validation", async () => {
            const textFields = await driver.findElementsByClassName(driver.locators.getElementByName("textfield"));
            const mail = textFields[1];
            const pass = textFields[2];
            await mail.sendKeys("mail");
            const mailValidation = await driver.findElementByText("Please provide your", SearchOptions.contains);
            expect(mailValidation).to.exist;
            await pass.sendKeys("pass");
            const passValidation = await driver.findElementByText("The value entered", SearchOptions.contains);
            expect(passValidation).to.exist;
        });

        it("Navigate to Validation Modes OnLostFocus tab", async () => {
            await navigateToHome(driver);
            const validationModes = await driver.findElementByText("Validation Modes", SearchOptions.exact);
            await validationModes.click();
            const lostFocusTab = await driver.findElementByText("OnLostFocus", SearchOptions.exact);
            await lostFocusTab.click();
        });

        it("Verify OnLostFocus validation", async () => {
            const textFields = await driver.findElementsByClassName(driver.locators.getElementByName("textfield"));
            const mail = textFields[1];
            const pass = textFields[2];
            await mail.click();
            await mail.sendKeys("mail");
            let mailValidation = await driver.findElementByTextIfExists("Please provide your", SearchOptions.contains);
            expect(mailValidation).to.be.undefined;
            await pass.click();
            await pass.sendKeys("pass");
            mailValidation = await driver.findElementByText("Please provide your", SearchOptions.contains);
            expect(mailValidation).to.exist;
            let passValidation = await driver.findElementByTextIfExists("The value entered", SearchOptions.contains);
            expect(passValidation).to.be.undefined;
            await mail.click();
            passValidation = await driver.findElementByText("The value entered", SearchOptions.contains);
            expect(passValidation).to.exist;
        });

        it("Navigate to Validation Modes Manual tab", async () => {
            await navigateToHome(driver);
            const validationModes = await driver.findElementByText("Validation Modes", SearchOptions.exact);
            await validationModes.click();
            const manualTab = await driver.findElementByText("Manual", SearchOptions.exact);
            await manualTab.click();
        });

        it("Verify Manual validation", async () => {
            const textFields = await driver.findElementsByClassName(driver.locators.getElementByName("textfield"));
            const mail = textFields[1];
            const pass = textFields[2];
            await mail.sendKeys("mail");
            await pass.sendKeys("pass");
            let mailValidation = await driver.findElementByTextIfExists("Please provide your", SearchOptions.contains);
            expect(mailValidation).to.be.undefined;
            let passValidation = await driver.findElementByTextIfExists("The value entered", SearchOptions.contains);
            expect(passValidation).to.be.undefined;
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }
            const validateButton = await driver.findElementByText("Validate manually");
            await validateButton.click();
            mailValidation = await driver.findElementByText("Please provide your", SearchOptions.contains);
            expect(mailValidation).to.exist;
            passValidation = await driver.findElementByText("The value entered", SearchOptions.contains);
            expect(passValidation).to.exist;
            const nickValidation = await driver.findElementByText("cannot be empty", SearchOptions.contains);
            expect(nickValidation).to.exist;
        });
    });

});