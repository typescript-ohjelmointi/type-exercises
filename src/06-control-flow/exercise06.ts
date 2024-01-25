// Exercise 6: Control flow analysis (CFA)
// Predict the type of the variable 'x' at different points in the code.
const cfa = (x: string | number | boolean) => {
  if (typeof x !== "string") {
    x //  string | number
    if (typeof x === "number") {
      x // number
    }else{
      x // TODO: ????
    }
  } else {
    x // TODO: ????
  }
}
