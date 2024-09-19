function prompt() {
    for (i = 0; i <= 10; i++) {
        const num =  prompt("Enter a number greater than 100");
        console.log(num);
        break;
        if (num >=100 || i >= 10) {
            console.log(num);
            break;
        };
    };
};

prompt();