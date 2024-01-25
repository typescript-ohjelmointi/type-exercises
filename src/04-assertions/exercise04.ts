// Exercise 4: Type assertions
// Use type assertions to transform object read from an outside source to be of type Person.
type Person = {
    name: string;
};

const value = JSON.parse("{name: 'John'}") // TODO: Value is now of type any, how could you force it be a Person.
/**
 * NOTE: usually if reading unknown data from a file, an API or database we might use a schmema validation library
 * like Zod (https://github.com/colinhacks/zod) to validate the input, so using "as" is not a good practice
 * */
