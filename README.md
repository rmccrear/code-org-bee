# Bee Game

This project is a simple bee game where you can control a bee to collect pollen and make honey. The game is inspired by the original project on [Code.org](https://studio.code.org/s/express-2024/lessons/16/levels/13).

## How to Update `auto-bee.js`

The `auto-bee.js` file contains the `automateBee` function, which you can edit to automate the bee's actions. Here are the available functions you can use to control the bee:

- `turnLeft()`: Turns the bee 90 degrees to the left.
- `turnRight()`: Turns the bee 90 degrees to the right.
- `moveForward()`: Moves the bee one step forward in the current direction.
- `gatherPollen()`: Collects pollen if the bee is on a flower.
- `makeHoney()`: Makes honey if the bee is on a honeycomb.

### Example

Here is an example of how you can automate the bee to turn right, move forward, and gather pollen:

```javascript
export function automateBee() {
  turnRight();
  moveForward();
  gatherPollen();
}
```

## Quick Overview of If/Else Statements

If/else statements are used to execute different blocks of code based on certain conditions. Here is the basic syntax:

```javascript
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}
```

### Example

```javascript
let pollenCollected = 0;

if (pollenCollected > 0) {
  console.log("The bee has collected pollen.");
} else {
  console.log("The bee has not collected any pollen.");
}
```

In this example, the message "The bee has not collected any pollen." will be logged to the console because `pollenCollected` is 0.

## Quick Overview of For Loops

For loops are used to execute a block of code a certain number of times. Here is the basic syntax:

```javascript
for (initialization; condition; increment) {
  // code to be executed
}
```

### Example

```javascript
for (let i = 0; i < 5; i++) {
  console.log("This is iteration number " + i);
}
```

In this example, the message "This is iteration number X" will be logged to the console five times, where X is the iteration number from 0 to 4.

Feel free to experiment with if/else statements and for loops in the `automateBee` function to create more complex behaviors for the bee.
