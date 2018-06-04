var pubService = require("pub-services").services.pubService;
var moment = require("moment");
var today = moment().format("dddd");

function getListPub() {
    pubService.allPubs();
}

function getOpenedPub() {
    pubService.pubsByDay(today);
}

module.exports = {
    getListPub: getListPub,
    getOpenedPub: getOpenedPub
};