var pubs = require("../../mocks/pubs");
import {Beer} from "../class/Beer";
import {OpenHour} from "../class/OpenHour";
import {Owner} from "../class/Owner";
import {Pub} from "../class/Pub";

function allPubs() {
    var bars = makePubArrayFromJSON(pubs);

    return bars;
}

function pubsByDay(day) {
    var pubsDay = filter(pub => pub.openDays.includes(day) == true);
    var barsByDay = makePubsArrayFromJSON(pubsDay);

    return barsByDay;
}

function makePubsArrayFromJSON(jsonPubsArrray){
    var barsArray = [];

    jsonPubsArrray.forEach(pub => {
        var owner = new Owner(pub.owner.firstName, pub.owner.lastName, pub.owner.mail);

        var bieres = [];
        pub.beers.forEach(beer => {
            var biere = new Beer(beer.type, beer.name);
            bieres.push(biere);
        });

        var opendays = pub.openDays;

        var openhour = new OpenHour(pub.openHours.start, pub.openHours.end);

        var bar = new Pub(pub.name, owner, opendays, openhour, bieres);
        barsArray.push(bar);
    });

    return barsArray;
}

module.exports = {
    allPubs: allPubs,
    pubsByDay: pubsByDay
}

allPubs();