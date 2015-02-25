function createCookies ( queryString ) {
 	 
    // Split into key/value pairs
    queries = queryString.split("&");
 
    // Create a cookie for each key/value pair
    for ( i = 0, l = queries.length; i < l; i++ ) {
    	temp = queries[i].split('=');

    	var expire = new Date();
    	expire.setDate(expire.getDate() + 7);
    	
    	//use cookies.js library COOKIE.setCookie() function
    	COOKIE.setCookie(temp[0], temp[1], expire);
    }
 
    return queries;
};

function init() {
	//store querystring 
	var queryString = location.search;
	
	//remove '?' from querystring
	queryString = queryString.substring(1);
	
	//call createCookies() function
	createCookies(queryString);
}

window.onload = init;
