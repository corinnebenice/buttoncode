var clicked = false; // to assure when mouse click is used to press buttons that button is only clicked once

var q = 0; // counts ignored interruptions
var w = 0; // counts accepted interruptions
var e = 0; // counts errors of interruptions

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  mouseClicked = function() { //registeres when mouse/trackpad clicks
    clicked = true;
  }

  background(0);
  fill(255, 255, 255);
  rect(50, 100, 140, 50);
  rect(50, 200, 140, 50);
  rect(50, 300, 140, 50);
  fill(20, 20, 20);
  text("Ignore interruption", 70, 130); //text of first button
  text("Take a Break", 85, 230); //text of second button
  text("There was no interruption", 60, 330); //text of third button


  if (clicked == true && mouseX > 50 && mouseX < 190 && mouseY > 100 && mouseY < 150) {
    q++; //variable q is for ignore
    // showbuttons = false; //make buttons dissapear after clicking
    $.ajax({ //to send data to the database after the click with all different information
      url: 'https://data.id.tue.nl/datasets/entity/386/item/',
      headers: {
        'api_token': 'a4SrY2lElYWyqsk1Xe0e58zuzgUTOt/GyAOUnJCciOTK94Z71GcDyv+cVxUD7jXg',
        'resource_id': 'Participant 3', //for participant 1
        'token': 'token_for_identifier'
      },
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        // parameter3: duration,
        // parameter4: amount,
        parameter5: w,
        parameter6: q,
        parameter7: e
      }),
      success: function(data) {
        console.log(data) //to show whether sending to database went well
      },
      error: function(e) {
        console.log(e) //to show whether sending to database went wrong
      }
    });
    clicked = false;
  }

  if (clicked == true && mouseX > 50 && mouseX < 190 && mouseY > 200 && mouseY < 250) {
    w++; //variable w is for accept / take a break
    // showbuttons = false;

    $.ajax({
      url: 'https://data.id.tue.nl/datasets/entity/386/item/',
      headers: {
        'api_token': 'a4SrY2lElYWyqsk1Xe0e58zuzgUTOt/GyAOUnJCciOTK94Z71GcDyv+cVxUD7jXg',
        'resource_id': 'Participant 3',
        'token': 'token_for_identifier'
      },
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        // parameter3: duration,
        // parameter4: amount,
        parameter5: w,
        parameter6: q,
        parameter7: e
      }),
      success: function(data) {
        console.log(data)
      },
      error: function(e) {
        console.log(e)
      }
    });
    clicked = false;
  }

  if (clicked == true && mouseX > 50 && mouseX < 190 && mouseY > 300 && mouseY < 350) {
    e++; //variable e is for errors
    // showbuttons = false;
    $.ajax({
      url: 'https://data.id.tue.nl/datasets/entity/386/item/',
      headers: {
        'api_token': 'a4SrY2lElYWyqsk1Xe0e58zuzgUTOt/GyAOUnJCciOTK94Z71GcDyv+cVxUD7jXg',
        'resource_id': 'Participant 3',
        'token': 'token_for_identifier'
      },
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        // parameter3: duration,
        // parameter4: amount,
        parameter5: w,
        parameter6: q,
        parameter7: e
      }),
      success: function(data) {
        console.log(data)
      },
      error: function(e) {
        console.log(e)
      }
    });
    clicked = false;
  }

  console.log(clicked);
}