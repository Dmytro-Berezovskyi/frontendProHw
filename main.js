const phoneBook = {
    contacts: [
        {
            name: "Alex",
            phoneNumber: 420775894305,
            email: "alex@gmail.com"
        },
        {
            name: "Petr",
            phoneNumber: 420775894680,
            email: "petr@gmail.com"
        },
        {
            name: "Alice",
            phoneNumber: 420773143306,
            email: "alice@gmail.com"
        },
        {
            name: "Eva",
            phoneNumber: 420773835605,
            email: "eva@gmail.com"
        },
    ]
};

function getPhoneBookData(name) {
    const index = phoneBook.contacts.findIndex(contact => contact.name === name);
    if (index > -1) {
        console.log(`Contact found (${name}): ${phoneBook.contacts[index].phoneNumber} ${phoneBook.contacts[index].email}`);
    }
};

function addNewContact(name, phoneNumber, email) {
    phoneBook.contacts.push({ name, phoneNumber, email });
};

getPhoneBookData("Petr");
addNewContact("Hanna", 420773432223, "hanna@gmail.com");
console.log(phoneBook);