var button = document.getElementById('mainButton');
var buttonText = document.getElementById('btnText');

var openForm = function() {
	button.className = 'active';
	buttonText.style.display = "none";
};


var closeForm = function() {
	button.className = '';
	buttonText.style.display = "";
};

document.addEventListener("keyup", function(e) {
	if (e.keyCode == 27 || e.keyCode == 13) {
		closeForm();
	}
});
