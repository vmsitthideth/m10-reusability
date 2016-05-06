// Main JavaScript File

// After page load
$(function() {
  // Data to visualize (shoe sizes along the horizontal)
  var data = [
    {text:'Paragraph 1'},
    {text:'Paragraph 2'},
    {text:'Paragraph 3'},
    {text:'Paragraph 4'}
  ];

  // Create an instance of your ParagraphChart, setting the color to blue

  var chart = ParagraphChart();
  // Select the container div, bind the data (datum) to it,
  // then call your instantiation of the ParagraphChart function

  var div = d3.select('#my-div').datum(data).call(chart);
  // Assign event handler to form
  $('form').submit(function(event){

    // Get the color and font sizes from your form
      var color = $('#color').val()

    // Reset the color and fontSize of your chart function
      var fontSize = $('fontSize').val();
      chart.color(color).fontSize(fontSize);
    // Re-call your chart function on your chartWrapper
      

    return false; // don't reload the page
  })
});
