package intern;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class BatchInsert {
	static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
	   static final String USER = "intern2025";
	   static final String PASS = "intern2025";
	   static final String QUERY = "insert into users_divya values (?,?,?)";
	   public static void main(String[] args) {
	      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
	    		  PreparedStatement pstmt = conn.prepareStatement(QUERY);){
	    	  	  pstmt.setInt(1, 105);
	    	  	  pstmt.setString(2, "siri");
	    	  	  pstmt.setString(3, "siri@gmail.com");
	    	  	  pstmt.addBatch();
  	  		
	    	  	  pstmt.setInt(1, 106);
	    	  	  pstmt.setString(2, "pavan");
	    	  	  pstmt.setString(3, "pavan5@gmail.com");
	    	  	  pstmt.addBatch();
	    	  	  pstmt.executeBatch();
	         }
	      catch (SQLException e) {
	         e.printStackTrace();
	      } 
	   }

}
