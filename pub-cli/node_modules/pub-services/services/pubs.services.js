var pubs = require("../mocks/pubs");
import {Beer, OpenHour, Owner, Pub} from "../pub-services/class"

function allPubs() {
    pubs.array.forEach(pub => {
        console.log(pub);
    });
    var a = new Owner("Nicolas", "Hodicq", "mail@mail.com");
    console.log(a);
    return pubs;
}

function pubsByDay(day) {
    var pubsDay = filter(pub => pub.openDays.includes(day) == true);
    return pubsDay;
}

export const allPubs = allPubs;
export const pubsByDay = pubsByDay;