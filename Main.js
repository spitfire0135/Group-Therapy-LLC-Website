//displays welcome based on time of day
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow >= 18) {
  greeting = 'GOOD EVENING AND WELCOME!';
} else if (hourNow >= 12) {
  greeting = 'GOOD AFTERNOON AND WELCOME!';
} else if (hourNow > 0) {
  greeting = 'GOOD MORNING AND WELCOME!';
} else {
  greeting = 'WELCOME!';
}
//display the greeting
document.getElementById('js_greeting').innerHTML = '<h3>' + greeting + '</h3>';

//store the quotes
let quotes = [
  'The constitution shall never be construed...to prevent the people of the United States who are peaceable citizens from keeping their own arms.',
  'When the law disarms good guys, bad guys rejoice.',
  'The right to self defense is inalienable from the right to life. Weaken one and the other is devalued. Surrender your arms today and forfeit your life tomorrow.',
  'Disarming law-abiding citizens will not stop unlawful citizens from obtaining one.',
  'The rifle itself has no moral stature, since it has no will of its own. Naturally, it may be used by evil men for evil purposes, but there are more good men than evil, and while the latter cannot be persuaded to the path of righteousness by propaganda, they can certainly be corrected by good men with rifles.',
  'You can not pick and choose which types of freedom you want to defend. You must defend all of it or be against all of it.',
  'Civil Wars happen when the victimized are armed. Genocide happens when they are not.',
];

//store the authors
let authors = [
  'Alexander Hamilton',
  'Ted Nugent',
  'A.E. Samaan',
  'Cliff Hannold',
  'Jeff Cooper, Art of the Rifle',
  'Scott Howard Phillips',
  'A.E. Samaan',
];

//calculate random index
let index = Math.floor(Math.random() * quotes.length);

//display the quote
document.getElementById('js_quotes').innerHTML =
  '<DL>\n' + '<DT>' + '<em>"' + quotes[index] + '"</DT>\n' + '<DD>' + '-- ' + '<em>' + authors[index] + '</em>' + '</DT>\n' + '</DL>\n';
