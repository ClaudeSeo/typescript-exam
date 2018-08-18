(() => {
    interface Person {
        firstName: string;
        lastName: string;
    }

    const greeter = (person: Person) => {
        return `Hello, ${person.firstName} ${person.lastName}`;
    };

    const user = {
        firstName: 'John',
        lastName: 'Docks',
    };

    console.log(greeter(user));
})();