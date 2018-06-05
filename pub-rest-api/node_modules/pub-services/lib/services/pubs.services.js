"use strict";

var _class = require("../../pub-services/class");

var pubs = require("../mocks/pubs");


function allPubs() {
    var a = new _class.Owner("Nicolas", "Hodicq", "mail@mail.com");
    console.log(a);
    return pubs;
}

function pubsByDay(day) {
    var pubsDay = filter(function (pub) {
        return pub.openDays.includes(day) == true;
    });
    return pubsDay;
}

module.exports = {
    allPubs: allPubs,
    pubsByDay: pubsByDay
};