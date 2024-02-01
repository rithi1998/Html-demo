document.addEventListener(
	"visibilitychange ",
	function () {
		if (document.hidden) {
			console.log("the document is not visible ");
		} else {
			console.log("the document is visible ");
		}
	}
);

// Another way to proceed
document.onvisibilitychange  =  function () {
	console.log("The page visibility has changed ");
};