// Exercise 7: Extending interfaces and types
// Create a Manager interface that extends the Employee interface.
interface Employee {
  name: string;
  department: string;
}

interface Manager { //TODO: manager is also an employee, but in addition a manager, so how to express that in code?
  managerIdNumber: number;
}

//What needs to be changed in Manager type, so that this doesn't give an error
const manager: Manager = {
  name: "Mr. Big",
  department: "Upper management",
  managerIdNumber: 1
}
