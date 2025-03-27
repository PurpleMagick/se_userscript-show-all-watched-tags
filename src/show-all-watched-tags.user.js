// ==UserScript==
// @name            Show all watched tags
// @description     Shows all the watched tags on the right sidebar if they overflow the limit and are truncated
// @author          VLAZ
// @grant           none
// @inject-into     page
// @match           https://stackoverflow.com/*
// @match           https://serverfault.com/*
// @match           https://superuser.com/*
// @match           https://*.stackexchange.com/*
// @match           https://askubuntu.com/*
// @match           https://stackapps.com/*
// @match           https://mathoverflow.net/*
// @match           https://pt.stackoverflow.com/*
// @match           https://ja.stackoverflow.com/*
// @match           https://ru.stackoverflow.com/*
// @match           https://es.stackoverflow.com/*
// @match           https://meta.stackoverflow.com/*
// @match           https://meta.serverfault.com/*
// @match           https://meta.superuser.com/*
// @match           https://meta.askubuntu.com/*
// @match           https://meta.mathoverflow.net/*
// @match           https://pt.meta.stackoverflow.com/*
// @match           https://ja.meta.stackoverflow.com/*
// @match           https://ru.meta.stackoverflow.com/*
// @match           https://es.meta.stackoverflow.com/*
// @match           https://stackoverflowteams.com/c/*
// @namespace       https://github.com/PurpleMagick/
// @run-at          document-end
// @version         1.0.0
// ==/UserScript==

(function() {
	//Getting the code to fire consitently when the button is usable is flaky, so repeat this until it works
	const intervalId = setInterval(main, 5);

	function main() {
		const showMore = document.querySelector(".js-show-remaining-watched");
		if (!showMore) {
			//button isn't here - 
			clearInterval(intervalId);
			return;
		}
		
		showMore.click();
		
		//verification - if it was hidden, then the click was registered. If still visible, 
		//then do nothing, so the interval will keep going
		const isHidden = window.getComputedStyle(showMore).display === "none";
		if (isHidden)
			clearInterval(intervalId);
	}
})();
