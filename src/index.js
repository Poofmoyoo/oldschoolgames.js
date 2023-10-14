var game = (function () {

    'use strict';

    var Constructor = function (selector) {
		this.elems = document.querySelectorAll(selector);
	};

	/**
	 * Return the constructor
	 */
	return Constructor;

})