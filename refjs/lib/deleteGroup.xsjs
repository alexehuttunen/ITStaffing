	var conn = $.hdb.getConnection();
	var delGroup = conn.loadProcedure("PROC_DEL_CUSTOMER_GROUP");
	
	var gcode=$.request.parameters.get("gcode");
	var delCount=0;	
	delCount=delGroup(gcode).ROW_COUNT;
	conn.commit();
	
	$.response.contentType = "text/plain";
	
	//var htmlsuccess = "<!DOCTYPE html><html><head></head><body><h2>SUCCESS</h2><form action='https://hxehost:51053/CustomerGroup.html' style='width:100px; height:30px;'><input type='submit' value='Back' /></form>";

	$.response.status= $.net.http.OK;
	$.response.headers.set("Access-Control-Allow-Origin", "*");
	$.response.setBody(delCount.toString());