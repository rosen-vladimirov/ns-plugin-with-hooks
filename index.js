"use strict";

const path = require("path");
const fs = require("fs");

module.exports = function ($platformsData, hookArgs) {
	let platformData = $platformsData.getPlatformData(hookArgs.platform);
	const appDestinationPath = path.join(platformData.appDestinationDirectoryPath, "app");

	const mainPageXml = "main-page.xml";
	const mainPageContent = fs.readFileSync(path.join(__dirname, mainPageXml), "utf8").toString();
	fs.writeFileSync(path.join(appDestinationPath, mainPageXml), mainPageContent);

	const mainViewModel = "main-view-model.js";
	const mainViewModelContent = fs.readFileSync(path.join(__dirname, mainViewModel), "utf8").toString();
	fs.writeFileSync(path.join(appDestinationPath, mainViewModel), mainViewModelContent);

	const hooksFileName = "hooks.txt";
	fs.writeFileSync(path.join(appDestinationPath, hooksFileName), "Hooks created this file for you.");
}