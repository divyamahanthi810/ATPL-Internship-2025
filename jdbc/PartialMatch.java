package intern;
import java.sql.*;
public class PartialMatch {
		   static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
		   static final String USER = "intern2025";
		   static final String PASS = "intern2025";
		   static final String QUERY = "select * from users_divya where u_name like ?";
		   public static void main(String[] args) {
		      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
		    		  PreparedStatement pstmt = conn.prepareStatement(QUERY);){
		    	  		pstmt.setString(1, "%Geeta%");
		    	  		ResultSet rs = pstmt.executeQuery();
		    	  		while(rs.next()) {
		            System.out.print("User ID: " + rs.getInt("u_Id")+", Name: "+rs.getString("u_name")+", Email: "+rs.getString("u_email"));
		         }
		      }
		      catch (SQLException e) {
		         e.printStackTrace();
		      } 
		   }
	}

