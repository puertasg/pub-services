var pubs = require("../mocks/pubs");

function allPubs() {
    pubs.forEach(function (pub) {
        console.log(pub.name);
    });
}

function pubsByDay(day) {
    var pubsDay = pubs.filter(pub => pub.openDays.includes(day) == true);

    console.log("Pubs opened on " + day);

    pubsDay.forEach(function (pub) {
        console.log(pub.name);
    });
}

module.exports = {
    allPubs: allPubs,
    pubsByDay: pubsByDay
}