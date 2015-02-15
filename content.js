
	
// Collect list of celebrities and list of loaded profiles
var celebrity = ["Brad Pitt", "Angelina Jolie", "Britney Spears", "Nick Jonas", "Miley Cyrus", "Stevie Wonder", "Justin Bieber", 
	"Taylor Swift", "Kanye West", "Kim Kardashian", "Steve Jobs", "Bill Gates", "Barack Obama", "Hillary Clinton", "Katy Perry",
	"Sam Smith", "Will Smith", "Lady Gaga", "Usain Bolt", "Mark Schlissel", "Mary Sue", "John McCain", "Beyonce", " Jay-Z"];

if (window.location.href == "https://twitter.com/followers") {

	var twitterNames = document.getElementsByClassName("ProfileNameTruncated-link u-textInheritColor js-nav js-action-profile-name");
	var oldNames = twitterNames;
}
else if (window.location.href == "https://twitter.com/") {

	var twitterNames = document.getElementsByClassName("fullname js-action-profile-name show-popup-with-id");
	var oldNames = twitterNames;
}
else {

	var twitterNames = document.getElementsByClassName("ProfileTweet-fullname u-linkComplex-target");
	var oldNames = twitterNames;
}


for (var i = 0; i < twitterNames.length; ++i) {

	// Generate random index for celebrity assignment
	var x = Math.floor((Math.random() * celebrity.length) + 0);

	// Assign name to twitter user
	twitterNames[i].innerHTML = celebrity[x];

	// Make sure same original name gets same celebrity name
	for (var j = 0; j < oldNames.length; ++j) {

		if (oldNames[i] == oldNames[j] && j < i) {

			twitterNames[i] == twitterNames[j];
		}
	}
}