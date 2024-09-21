function promptFunc() {
    for (i = 0; i <= 10; i++) {
        let num =  +prompt( i === 0 ?
            "Enter a number greater than 100" :
            "Please enter a number greater than 100" );
        if (num >=100) {
            console.log(num);
            break;
        } else if (i === 10) {
            console.log(`The number ${num} is not greater than 100`);
            break;
        } else if (isNaN(num) || num <= 0) {};
    };
};

promptFunc();