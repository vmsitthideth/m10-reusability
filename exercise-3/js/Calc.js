window.Calc = (function() {
    // Write a constructor function which takes a number, stores it, and
    // defines all Calc API functions
    var c = function(num) {
        // Find a way to store all instance viariables and functions
        // for this calculator

        

        var calc = {};
		calc.number = num;


        // Implement getVal, plus, minus, times, divide, and clear
        calc.getVal = function(value) {
        	// if (!arguments.length) {
        	// 	return number;
        	// }
        	// this.number = value;
        	// return calc;
        	return this.number;
        };

        calc.plus = function(value) {
        	this.number += value;
        	return calc;
        };

        calc.minus = function(value) {
        	this.number -= value;
        	return calc;
        };

        calc.times = function(value) {
        	this.number = this.number * value;
        	return calc;
        };

        calc.divide = function(value) {
        	this.number = this.number / value
        	return calc;
        };

        calc.clear = function() {
        	this.number = 0;
        	return calc;
        };

        return calc;

    };

    // Return your constructed object
    return c;
})();
