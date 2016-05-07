# Calc.js API Reference

The world's smallest JavaScript calculator library (probably).

## Usage

```javascript

var c1 = Calc(2);
var c2 = Calc(10);

c1.plus(2)
c2.times(10)
c2..divide(2);

console.log(c1.getVal());
console.log(c2.getVal());
console.log(c1.getVal());

```


## API Functions
Here are the functions that are available through Calc.js:


\# *Calc*(number)

> Constructs a Calc object with the current value set to `number`


\# *Calc.getVal*()

> Returns the current value in the Calc object

\# *Calc.plus(number)

> Adds the current value in the Calc object with 'number'

\# *Calc.minus(number)

> Subtracts the current value in the Calc object with 'number'

\# *Calc.times(number)

> Multiplies the current value in the Calc object with 'number'

\# *Calc.divide(number)

> Divides the current value in the Calc object with 'number'

\# *Calc.clear()

> Resets the current value to '0'