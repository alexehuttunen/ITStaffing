/*eslint no-unused-vars: 0 */
function addRow() {
	var conn = $.hdb.getConnection();
	conn.executeUpdate("insert into COUNTER_TABLE values((select max(ID) +1 from COUNTER_TABLE) , now());");
	conn.commit();
	conn.close();
}