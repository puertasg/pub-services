var pubs = require("../mocks/pubs");

function allPubs() {
    return pubs;
}

function pubsByDay(day) {
    var pubsDay = pubs.filter(pub => pub.openDays.includes(day) == true);
    return pubsDay;
}

module.exports = {
    allPubs: allPubs,
    pubsByDay: pubsByDay
}