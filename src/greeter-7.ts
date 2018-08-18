(() => {
    class Pizza {
        constructor(public name: string, public toppings: string[]) {};
    }

    class PizzaMaker {
        static create (event: Pizza) {
            return new Pizza(event.name, event.toppings);
        }
    }

    const pizza: Pizza = PizzaMaker.create({
        name: '페페로니피자',
        toppings: ['치즈'],
    });

    console.log(pizza);
})();