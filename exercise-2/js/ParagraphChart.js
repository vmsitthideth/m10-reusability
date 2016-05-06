// Create a function ParagraphChart that will be your reusable function
var ParagraphChart = function() {
  // Create variables within the function scope to track your color and fontSize
  var color, fontSize;

  // Write your chart function that will be returned by the ParagraphChart function.
  // It should take in a parameter that represents your selection

    var chart = function(selection) { //selection in this case is our div
    // Loop through selections using the .each method
      selection.each(function(data, index) {


      // Select `this` as the element in which you want to render your chart
      var div = d3.select(this);  //selects our div

      // Select all of the p elements inside of your div and bind your data
      strings = div.selectAll('p').data(data);

      // Enter new p elements
      strings.enter().append('p');

      // Exit elements
      strings.exit().remove();

      // Update elements

      strings.transition().duration(500).text(function(d) {return d.text})
        .style('fontSize', fontSize).style('color',color);
      });
    }



  // Write a method to update the color
    chart.color = function(value) {
      if(!arguments.length) return color;
      color = value;
      return chart;
    };


  // Write a method to update the font-size
    chart.fontSize = function(value) {
      if(!arguments.length) return fontSize;
      fontSize = value;
      return chart;
    };


  // Return the chart object
    return chart;
}
