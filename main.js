let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function companySalary(someCompany) {
    let sum = 0;
    if (Array.isArray(someCompany)) {
        someCompany.forEach(sales => {
            sum += Object.values(sales.salary);
        })
    }
    return sum;
}

//function companySalary(department) {
//    if(Array.isArray(department)) {
//        return department.reduce((sum, item) => sum + item.salary, 0);
//    } else {
//        let sum = 0;
//        for (let subdep of Object.values(department)) {
//            sum += companySalary(subdep);
//        }
//        return sum;
//    }
//};

console.log(companySalary(company));