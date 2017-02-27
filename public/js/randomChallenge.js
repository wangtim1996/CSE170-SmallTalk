'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	setRandom();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.theChallenge').click(randomizeChallenge);
}

function randomizeChallenge(e)
{
  e.preventDefault();//prob not even needed, lol

	setRandom();

}

function setRandom()
{
	var challenges = Array(
		'Say hi to a random stranger.',
		'Ask a stranger a question.',
		'Complement a boy',
		'Act insane in front of people',
		'IDK, Figure it out yourself',
		'Complement a girl'
	);
	var challenge = challenges[Math.floor(Math.random()*challenges.length)];

	$('.theChallenge').html(challenge);
}
