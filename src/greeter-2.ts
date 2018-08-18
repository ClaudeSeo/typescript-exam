(() => {
    class Student {
        fullName: string;

        constructor(public firstName: string, public middleInitial: string, public lastName: string) {
            this.fullName = `${firstName} ${middleInitial} ${lastName}`;
        }
    }

    interface Person {
        firstName: string;
        lastName: string;
    }

    const greeter = (person: Person) => {
        return `Hello, ${person.firstName} ${person.lastName}`
    };

    const user = new Student('John', 'M', 'User');

    console.log(greeter(user));
})();