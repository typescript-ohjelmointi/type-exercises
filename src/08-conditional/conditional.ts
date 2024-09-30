type Hello = "Hello";
type One = 1;

const someText: Hello = "Hello";

type IsTextString = Hello extends string...  //TODO: complete with help of ternary, so that IsTextString will become true

const someNumber: One = 1;
type IsNumberString = One extends string... // TODO: complete with help of ternary, so that IsNumberString will become false
