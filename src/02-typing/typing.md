# 2. structural typing (compare to e.g. Java with Nominal-typing):

```ts
type Foo = {
  x: number;
};
type Bar = {
  x: number;
};
let foo: Foo = { x: 1 };
let bar: Bar = { x: 1 };

// NOTE: typeof keyword, more on this later
if (typeof foo === typeof bar) {
  // They are structurally equal, so they are the same type!
  console.log("Types foo and bar are structurally equal!");
}
```
