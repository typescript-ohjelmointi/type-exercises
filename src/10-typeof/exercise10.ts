// Use the typeof operator to generate a type that matches the structure of the object.
const sampleTodo = {
    title: "Title",
    description: "Desc",
    completed: false,
};

// TODO: how to get the type of sampleTodo automatically?
type TypeOfTodo = { title: string, description: string, completed: boolean };
