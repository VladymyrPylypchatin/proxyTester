// const puppeteer = require("puppeteer-extra")
// const pluginStealth = require("puppeteer-extra-plugin-stealth")
// puppeteer.use(pluginStealth())
const Apify = require('apify');
const randomUA = require('modern-random-ua');

/*
    {
        server: '0.0.0.0:1345',

    }
*/
const proxyTester = async (serviceURL, proxyCredentials) => {
    const browser = await Apify.launchPuppeteer({
        userAgent: randomUA.generate(),
        stealth: true,
        useChrome: true,
        args: [
            // '--no-sandbox',
            // '--disable-setuid-sandbox',
            // '--disable-extensions',
            '--ignore-certificate-errors',
            '--ignore-certificate-errors-spki-list',
            '--enable-features=NetworkService',
            `--proxy-server=${proxyCredentials.server}`,
        ],
    });
    const page = await browser.newPage();


    await page.authenticate({
        username: proxyCredentials.username,
        password: proxyCredentials.password
    });

    page.on("error", function (err) {
        let theTempValue = err.toString();
        console.log("Error: " + theTempValue);
    });


    page.on("pageerror", function (err) {
        let theTempValue = err.toString();
        console.log("Page error: " + theTempValue);
    });

    await page.goto(serviceURL);
}

module.exports = proxyTester;