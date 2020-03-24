	var startDate=$.request.parameters.get("startDate");
	var endDate=$.request.parameters.get("endDate");
	
	var conn = $.hdb.getConnection();
	var query = "SELECT \"NAME\",\"DAY_OF_WEEK\",\"DATE\", \"FORECAST_AM_PM\", \"WBS_ID\" as WBS, \"WBS_DESCRIPTION\" as PROJECT, \"FORECAST_SOFTBOOKING\" as SOFT,";
	query +=	"\"WBS_ID_AM\" as \"WBS_AM\", \"WBS_DESCRIPTION_AM\" as PROJECT_AM, \"SOFT_BOOKING_AM\" as SOFT_AM,";
	query +=	"\"WBS_ID_PM\" as \"WBS_PM\", \"WBS_DESCRIPTION_PM\" as PROJECT_PM, \"SOFT_BOOKING_PM\" as SOFT_PM ";
	query +=	"FROM \"core.models::CV_STG_COMPLEX\" WHERE \"COST_CENTRE\" in ('Analytics Team 5','Project Team 4') AND \"DATE\">='";
	query +=	startDate;
	query +=	"' AND \"DATE\" <='";
	query +=	endDate;
	query +=	"' ";
	query +=    "order by \"NAME\", \"DAY_NUMBER\", \"DATE\"";
	
	var result = conn.executeQuery(query);
	
	
	$.response.contentType = "application/json";
	$.response.status= $.net.http.OK;
	$.response.headers.set("Access-Control-Allow-Origin", "*");
	$.response.setBody(result);

