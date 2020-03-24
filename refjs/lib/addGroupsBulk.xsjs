	var conn = $.hdb.getConnection();
	var addGroup = conn.loadProcedure("PROC_ADD_CUSTOMER_GROUP");
	//var fileContent = $.request.entities[0].body.asString();
	var fileContent= $.request.body.asString();
	var fileRows=fileContent.split('\n');
	var rowCount=0;
for (var i = 0; i<fileRows.length; i++) { 
	if(i>0){
	var rowCols=fileRows[i].split(',');
		if(rowCols[0].length>0){
	 addGroup(rowCols[0],rowCols[1],rowCols[2]);
	 rowCount++;
		}
	}
}
	conn.commit();
	$.response.contentType = "text/plain";
	
	//var htmlsuccess = "<!DOCTYPE html><html><head></head><body><h2>SUCCESS</h2><form action='https://hxehost:51053/CustomerGroup.html' style='width:100px; height:30px;'><input type='submit' value='Back' /></form>";

	var htmlsuccess='- Rows Entered: '+rowCount.toString();
	$.response.status= $.net.http.OK;
	$.response.headers.set("Access-Control-Allow-Origin", "*");
	$.response.setBody(htmlsuccess);