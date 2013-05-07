
/**
 * A simple requests library.
 *
 *
 **/

requests = (function () {

	// make the request object
	try {
		request = new XMLHttpRequest();
	} catch (error) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (error) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (error) {
				throw new Error("requests: Could not create HTTP request object.");
			}
		}
	}

	return {
		get : function (url) {
			request.open("GET", url, false);
			request.send(null);
			return request.responseText;

		}
	}

	return requests;
})();