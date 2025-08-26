package intern;
import java.sql.*;
public class userpreparedstat {
		   static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
		   static final String USER = "intern2025";
		   static final String PASS = "intern2025";
		   static final String QUERY = "insert into users_divya values (?,?,?)";
		   public static void main(String[] args) {
		      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
		    		  PreparedStatement pstmt = conn.prepareStatement(QUERY);){
		    	  		pstmt.setInt(1, 104);
		    	  		pstmt.setString(2, "Geeta");
		    	  		pstmt.setString(3, "Geeta@gmail.com");
		    		  int rs = pstmt.executeUpdate();
		            System.out.print("Updated rows: " + rs);
		         }
		      catch (SQLException e) {
		         e.printStackTrace();
		      } 
		   }
	}

