let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}

function companySalary(someCompany) {
    if(Array.isArray(someCompany)) {
        return someCompany.reduce((acc, value) => acc + value.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(someCompany)) {
            sum += companySalary(subdep);
        }
        return sum;
    }
}

console.log(companySalary(company));