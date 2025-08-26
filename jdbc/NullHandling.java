package intern;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class NullHandling {
	static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
	static final String USER = "intern2025";
	   static final String PASS = "intern2025";
	   static final String QUERY = "insert into items_divya (i_name,i_price,i_description) values (?,?,?)";
	   public static void main(String[] args) {
	      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
	    		  PreparedStatement pstmt = conn.prepareStatement(QUERY);){
	    	  		pstmt.setString(1, "Book");
	    	  		pstmt.setInt(2, 250);
	    	  		pstmt.setNull(3, java.sql.Types.VARCHAR);
	    	  		pstmt.addBatch();
	    	  		
	    	  		pstmt.setNull(1, java.sql.Types.VARCHAR);
	    	  		pstmt.setInt(2, 45000);
	    	  		pstmt.setString(3, "watch");
	    	  		pstmt.addBatch();
	    	  		
	    	  		pstmt.setString(1, "Tennis");
	    	  		pstmt.setNull(2, java.sql.Types.INTEGER);
	    	  		pstmt.setString(3, "Play");
	    	  		pstmt.addBatch();
	    	  		pstmt.executeBatch();
	      }
	      catch (SQLException e) {
	         e.printStackTrace();
	      } 
	   }

}
