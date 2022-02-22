/*
 * jQuery XML Extension plugin - xmlprocess
 * Version 1.2 Beta (31. DEC. 2011)
 * by weggles 
 *
 * Examples: $.postJsonAjax(url, param, reponseFunction)
 *           
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */

(function($) {
	$.fn.extend(jQuery, {
		postXmlAjax : function(requestUrl, requestXml ,callback){
			try {
					$.ajax({
					   type: "POST",
					   dataType: 'xml',
					   url:  requestUrl,
					   data: requestXml,
					   async: true,
					   success: function(responseXml){
							callback(responseXml);
					   },
					   error   : function(result){ alert( '에러가 발생 하였습니다.' );}
					});
				} catch (e) {
					alert("[AJAX ERROR] " + e.message);
				}
		},
		
		postSyncXmlAjax : function(requestUrl, requestXml ,callback){
			try {
					$.ajax({
					   type: "POST",
					   dataType: 'xml',
					   url:  requestUrl,
					   data: requestXml,
					   async: false,
					   success: function(responseXml){
							callback(responseXml);
					   },
					   error   : function(result){ alert( '에러가 발생 하였습니다.' );}
					});
				} catch (e) {
					alert("[AJAX ERROR] " + e.message);
				}
		},
		
		postSyncJsonAjax : function(requestUrl, requestData ,callback){
		    try {
		        $.ajax({
		            type: "POST",
		            dataType: 'json',
		            url:  requestUrl,
		            data: requestData,
		            async: false,
		            success: function(responseJson){
		                callback(responseJson);
		            },
		            error   : function(result){ alert( '에러가 발생 하였습니다.' );}
		        });
		    } catch (e) {
		        alert("[AJAX ERROR] " + e.message);
		    }
		},
		
		postJsonAjax : function(requestUrl, requestData ,callback){
			try {
					$.ajax({
					   type: "POST",
					   dataType: 'json',
					   url:  requestUrl,
					   data: requestData,
					   async: true,
					   success: function(responseJson){
							callback(responseJson);
					   },
					   error   : function(result){ alert( '에러가 발생 하였습니다.' );}
					});
				} catch (e) {
					alert("[AJAX ERROR] " + e.message);
				}
		},

		postHtmlAjax : function(requestUrl, requestData ,callback){
			try {
					$.ajax({
					   type: "POST",
					   dataType: 'html',
					   url:  requestUrl,
					   data: requestData,
					   async: true,
					   success: function(responseJson){
							callback(responseJson);
					   },
					   error   : function(result){ alert( '에러가 발생 하였습니다.' );}
					});
				} catch (e) {
					alert("[AJAX ERROR] " + e.message);
				}
		}		
	});	
})(jQuery);