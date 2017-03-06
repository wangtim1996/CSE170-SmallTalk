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

function set(){
    var challenges = Array(
       	'Say hi to a random stranger.',
		'Ask a stranger a question.',
		'Complement a boy',
		'Ask a stranger where the is the closest restroom located',
		'Find out the name of a stranger you find attractive',
        'Give a stranger candy',
		'Do one good deed for someone you have never met',
        'Have a conversation with someone who is not one of your friends',
		'Give your sit to a stranger in public transport',
        'Offer food to a homeless man',
        'Buy a drink for a homeless man',
		'Complement a girl'
	);
	var challenge = challenges[Math.floor(Math.random()*challenges.length)];
    document.getElementById("chal").innerHTML = challenge;
	$('#challengeInput').val(challenge);
}

function setRandom()
{
	var challenges = Array(
        'Say hi to a random stranger.',
		'Ask a stranger a question.',
		'Complement a boy',
		'Ask a stranger where the is the closest restroom located',
		'Find out the name of a stranger you find attractive',
        'Give a stranger candy',
		'Do one good deed for someone you have never met',
        'Have a conversation with someone who is not one of your friends',
		'Give your sit to a stranger in public transport',
        'Offer food to a homeless man',
        'Buy a drink for a homeless man',
		'Complement a girl'
	);
	var challenge = challenges[Math.floor(Math.random()*challenges.length)];

	$('.theChallenge').html(challenge);
  $('#challengeInput').val(challenge);
}
