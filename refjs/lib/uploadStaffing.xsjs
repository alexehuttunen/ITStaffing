	var conn = $.hdb.getConnection();
    //var trunc = conn.loadProcedure("PROC_TRUN_STAFFING");
	//trunc();
	var addBooking = conn.loadProcedure("PROC_ADD_STAFFING_ENTRY");
	//var fileContent = $.request.entities[0].body.asString();
	var fileContent= $.request.body.asString();
	var fileRows=fileContent.split('--RETURN--');
	var rowCount=0;
for (var i = 0; i<fileRows.length; i++) { 
	var rowCols=fileRows[i].split(',');
		if(rowCols[0].length>0 && rowCols[1]!=="0"){
	 addBooking(rowCols[0],rowCols[1],rowCols[2],rowCols[3],rowCols[4],rowCols[5],rowCols[6],rowCols[7],rowCols[8],rowCols[9],rowCols[10],rowCols[11],rowCols[12],rowCols[13],rowCols[14],rowCols[15],rowCols[16],rowCols[17]);
	 rowCount++;
	}
}
	conn.commit();
	$.response.contentType = "text/plain";
	
	//var htmlsuccess = "<!DOCTYPE html><html><head></head><body><h2>SUCCESS</h2><form action='https://hxehost:51053/CustomerGroup.html' style='width:100px; height:30px;'><input type='submit' value='Back' /></form>";

	var htmlsuccess='- Rows Entered: '+rowCount.toString();
	$.response.status= $.net.http.OK;
	$.response.headers.set("Access-Control-Allow-Origin", "*");
	$.response.setBody(htmlsuccess);