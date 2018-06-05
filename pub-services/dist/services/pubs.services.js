"use strict";

var _Beer = require("../class/Beer");

var _OpenHour = require("../class/OpenHour");

var _Owner = require("../class/Owner");

var _Pub = require("../class/Pub");

var pubs = require("../../mocks/pubs");


function allPubs() {
    var bars = makePubArrayFromJSON(pubs);
    console.log(bars);

    return bars;
}

function pubsByDay(day) {
    var pubsDay = filter(function (pub) {
        return pub.openDays.includes(day) == true;
    });

    var barsByDay = makePubArrayFromJSON(pubsDay);
    return barsByDay;
}

function makePubArrayFromJSON(jsonPubsArrray) {
    var barsArray = [];

    jsonPubsArrray.forEach(function (pub) {
        var owner = new _Owner.Owner(pub.owner.firstName, pub.owner.lastName, pub.owner.mail);

        var bieres = [];
        pub.beers.forEach(function (beer) {
            var biere = new _Beer.Beer(beer.type, beer.name);
            bieres.push(biere);
        });

        var opendays = pub.openDays;

        var openhour = new _OpenHour.OpenHour(pub.openHours.start, pub.openHours.end);

        var bar = new _Pub.Pub(pub.name, owner, opendays, openhour, bieres);
        barsArray.push(bar);
    });

    return barsArray;
}

module.exports = {
    allPubs: allPubs,
    pubsByDay: pubsByDay
};

allPubs();
//# sourceMappingURL=pubs.services.js.map