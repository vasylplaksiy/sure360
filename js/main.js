let nav = {
	init: function () {
		if(!document.querySelector(".mainHeaderNavToggle") || !document.querySelector(".mainHeaderNavOverlay")) return false;

		if (document.querySelector(".mainHeaderNavToggle")) {
			document.querySelector(".mainHeaderNavToggle").addEventListener("click", function () {
				document.body.classList.toggle("showNav");
				return false;
			});
		}
		if (document.querySelector(".mainHeaderNavOverlay")) {
			document.querySelector(".mainHeaderNavOverlay").addEventListener("click", function () {
				document.body.classList.toggle("showNav");
				return false;
			});
		}
	}
};

nav.init();

//-------------------------------

let clients = {
	init: function () {
		if(!document.querySelector(".clientsEl") || !document.querySelector(".clientsList")) return false;

		const clientsListContent = document.querySelector(".clientsList").innerHTML;
		document.querySelector(".clientsList").innerHTML += clientsListContent;

		const clientsLength = parseInt(document.querySelectorAll(".clientsEl").length);
		document.querySelector(".clientsList").style.setProperty("--clientsLength", clientsLength);
	}
};

clients.init();

//-------------------------------




