let cardUser = {
    name:"Alex",
    age: 30,
    city: "Kyiv",
    getData: function () {
        return (this.name + ", " + this.age + " years old, "+ "living in " + this.city);
    },
};

console.log(cardUser.getData());