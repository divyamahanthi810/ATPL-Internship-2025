package intern;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DeleteRecords {
	static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
	   static final String USER = "intern2025";
	   static final String PASS = "intern2025";
	   static final String QUERY = "delete from users_divya where u_join<'2022-08-15'";
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
