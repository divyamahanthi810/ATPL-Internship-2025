package intern;
import java.sql.*;
public class UserStatement {

	static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
	   static final String USER = "intern2025";
	   static final String PASS = "intern2025";
	   static final String QUERY = "update users_divya set u_email='divya8@gmail.com' where u_Id=101";
	   public static void main(String[] args) {
	      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
	    		    Statement stmt = conn.createStatement();){
	    		    int rs = stmt.executeUpdate(QUERY);
	            System.out.print("Updated rows: " + rs);
	         }
	      catch (SQLException e) {
	         e.printStackTrace();
	      } 
	   }
}
