# Conditional types + extends keyword

A conditional type in TypeScript allows you to choose between two types based on a condition.
It uses the extends keyword to check if one type is assignable to another. If the condition is true, one type is returned; otherwise, a different type is returned. The syntax is similar to a ternary operator:

```ts
T extends U ? X : Y
```

This means, "If T extends U, return type X; otherwise, return type Y."
"T extends string" means roughly speaking that T=string (or then some type that extends string)

https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

```ts
interface Vehicle {
  drive(): void;
}
interface Car extends Vehicle {
  woof(): void;
}

type DerivedType = Car extends Vehicle ? number : string; //DerivedType = number

type DerivedType2 = string extends Vehicle ? number : string; //DerivedType2 = string
```
