// Optional and readonly properties
// Make description an optional property.
type TodoWithOptionalDescription = {
  title: string;
  description: string; //TODO: What to change in description to make it optional?
  completed: boolean;
};

const myPartlyOptionalTodo: TodoWithOptionalDescription = {
  title: "My Title",
  completed: false,
}; //This should work
