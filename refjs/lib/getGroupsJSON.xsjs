	var conn = $.hdb.getConnection();
	var query = "SELECT * FROM CUSTOMER_GROUP order by GROUP_CODE";
	
	var result = conn.executeQuery(query);
	
	
	$.response.contentType = "application/json";
	$.response.status= $.net.http.OK;
	$.response.headers.set("Access-Control-Allow-Origin", "*");
	$.response.setBody(result);

