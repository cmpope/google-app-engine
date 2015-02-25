var COOKIE = {
	
	setCookie: function(name, value, expire, path, domain) {
		'use strict';
		
		var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
		
		str += ';expires=' + expire.toGMTString();
		
		document.cookie = str;
		
	}, //end of the setCookie() function
	
	getCookie: function(name) {
		var len = name.length;
		
		var cookies = document.cookie.split(';');
		
		for (var i = 0, count = cookies.length; i < count; i++) {
			var value = (cookies[i].slice(0,1) == ' ') ? cookies[i].slice(1) : cookies[i];
			
			value = decodeURIComponent(value);
			
			if (value.slice(0, len) == name) {
				return value.split('=')[1];
			} //end of IF
			
		} //end of FOR loop
		
		return false;
	}, //end of getCookie() function
	
	deleteCookie: function(name, path, domain) {
		'use strict';
		
		//Chapter 9 - Pursue #15 - add path and domain
		document.cookie = encodeURIComponent(name) + '=;expires=Thu, 01-Jan-1970 00:00:00 GMT' + ';path=' + path + ';domain' + domain;
		
	} //end of deleteCookie() function
	
}; //end of COOKIE declaration
