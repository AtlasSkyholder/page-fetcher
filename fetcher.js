const request = require('request');
const fs = require('fs');


request('http://www.google.com', (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  
  fs.writeFile('./input.html', body, (err) => {
    if (err) throw err;

    fs.stat('./input.html', function(err, stats) {
      let size = stats['size'];
      console.log("Downloaded and saved " + size + " bytes to ./index.html");
    });
  });
});
