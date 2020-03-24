	var conn = $.hdb.getConnection();
	var trunGroup = conn.loadProcedure("PROC_TRUN_CUSTOMER_GROUP");
	trunGroup();
	conn.commit();
	
	$.response.contentType = "text/plain";
	
	//var htmlsuccess = "<!DOCTYPE html><html><head></head><body><h2>SUCCESS</h2><form action='https://hxehost:51053/CustomerGroup.html' style='width:100px; height:30px;'><input type='submit' value='Back' /></form>";
	var htmlsuccess="Success";
	$.response.status= $.net.http.OK;
	$.response.headers.set("Access-Control-Allow-Origin", "*");
	$.response.setBody(htmlsuccess);
	