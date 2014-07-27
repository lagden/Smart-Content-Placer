// ***********************************************************************
// Example usage... Please note how the content is responsive to fill it's
// Container - eg in this case we set image width to 100%. Content must be
// responsive because if margins are used the image must be stretched ever
// so slightly to compensate for margins. If you do not have responsive
// data you will end up with a double margin gap on larger sized data.
// ***********************************************************************

// To make things easier to read I have made a little class to hold data
// attributes. You could just use a JSON object with the same properties exposed
// if you desired.
var ContentPlacerData = function(content, unitWidth, unitHeight) {
  this.content = content;
  this.height = unitHeight;
  this.width = unitWidth;
};

var dataArrayExample = [];
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/400/200\');"><div class="bar"><h2>Wide kitten is wide</h2><p>I can haz fish pls?</p></div></a>', 2 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/400/400\');"><div class="bar"><h2>Double width and height cat</h2><p>Do I look fat? Its my furs.</p></div></a>', 2 ,2));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/400/200\');"><div class="bar"><h2>Wide kitten is wide</h2><p>I can haz fish pls?</p></div></a>', 2 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/400/400\');"><div class="bar"><h2>Double width and height cat</h2><p>Do I look fat? Its my furs.</p></div></a>', 2 ,2));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/400/200\');"><div class="bar"><h2>Wide kitten is wide</h2><p>I can haz fish pls?</p></div></a>', 2 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/400/400\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 2 ,2));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/400/200\');"><div class="bar"><h2>Wide kitten is wide</h2><p>I can haz fish pls?</p></div></a>', 2 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/400/400\');"><div class="bar"><h2>Double width and height cat</h2><p>Do I look fat? Its my furs.</p></div></a>', 2 ,2));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/400/200\');"><div class="bar"><h2>Wide kitten is wide</h2><p>I can haz fish pls?</p></div></a>', 2 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
dataArrayExample.push(new ContentPlacerData('<a href="http://www.jasonmayes.com/" class="content" style="background-image:url(\'http://placekitten.com/200/200\');"><div class="bar"><h2>Its a kitten!</h2><p>Meow nom nom</p></div></a>', 1 ,1));
var myPlacer = new ContentPlacer('listView', 200, 4, dataArrayExample, 30);