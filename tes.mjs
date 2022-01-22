class FizzBuzz {
    constructor(name) {
        this.name = name;
        this.fizzBuzz = (data) => {
            for (let i = 1; i <= data; i++) {
                const data1 = i % 3 === 0 && i % 5 === 0;
                const data2 = i % 3 === 0;
                const data3 = i % 5 === 0;
                if (data1) {
                    console.log(`FizzBuzz ${i}`);
                } else if (data2) {
                    console.log(`Fizz ${i}`);
                } else if (data3) {
                    console.log(`Buzz ${i}`);
                } else {
                    console.log(i);
                }
            }
        }
        this.lastName = "Afianando";
    }

    buzzFizz() {
        return this.fizzBuzz(100);
    }

    sayHello(name) {
        return `Hello ${name}, My Name is ${this.name} ${this.lastName}`;
    }

    factorial(value) {
        if(value <= 0) {
            return 1;
        }

        let result = 1;
        for(let i = 1; i <= value; i++) {
            result *= i;
        }
        return result;
    }
}

const fizzBuzz = new FizzBuzz("Iko");
fizzBuzz.buzzFizz();
console.log(fizzBuzz.sayHello("Joko"));
console.log(fizzBuzz.factorial(5));