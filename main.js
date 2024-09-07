let userYearBorn = prompt("What year are you born?");
let userResidence = prompt("What city are you from?");
let userFavoriteSport = prompt("What is your favorite sport?");

if (userYearBorn) {
    let userAge = 2024 - (+userYearBorn);
    console.log(`Ваш вік ${userAge} років`);
} else {
    console.log("Шкода, що Ви не захотіли ввести свій вік");
}

switch (true) {
    case userResidence === "Київ" || userResidence === "Kyiv":
        console.log("Ти живеш у столиці України");
        break;
    case userResidence === "Вашингтон" || userResidence === "Washington":
        console.log("Ти живеш у столиці США");
        break;
    case userResidence === "Лондон" || userResidence === "London":
        console.log("Ти живеш у столиці Англії");
        break;
    default:
        userResidence ? console.log(`Ти живеш у місті ${userResidence}`)
            :
            console.log("Шкода, що Ви не захотіли ввести своє місто");
        break;
}

switch (true) {
    case userFavoriteSport === "Футбол" || userFavoriteSport === "Footbol":
        console.log("Круто! Хочеш стати Ліонелем Мессі?");
        break;
    case userFavoriteSport === "Баскетбол" || userFavoriteSport === "Basketball":
        console.log("Круто! Хочеш стати Леброном Джеймсом?");
        break;
    case userFavoriteSport === "Бокс" || userFavoriteSport === "Boxing":
        console.log("Круто! Хочеш стати Олександром Усиком?");
        break;
    default:
        userFavoriteSport ? console.log(`Круто, що Вам подобається ${userFavoriteSport}`)
            : console.log("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
        break;
}