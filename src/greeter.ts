(() => {
    const greeter = (person: string) => {
        return `Hello, ${person}`;
    };

    const user = 'John';
    console.log(greeter(user));
})();
