package intern;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SQLInjection {

	   static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
	   static final String USER = "intern2025";
	   static final String PASS = "intern2025";
	   static String Name = "Divya";
	   static String Id = "101";
	   static String sql = "SELECT * FROM users_divya WHERE u_name='" + Name + "' AND u_Id='" + Id + "'";
	   static String query="SELECT * FROM users_divya WHERE u_name=? AND u_Id=?";
	   public static void main(String[] args) {
	   try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);){
		    Statement stmt=conn.createStatement();
		    ResultSet r=stmt.executeQuery(sql);
		    System.out.println("insecure Statement");
		    while(r.next())
		    {
		    	System.out.println("UserName "+ r.getString("u_name")+", UserId "+r.getInt("u_Id"));
		    }
		    PreparedStatement myStmt = conn.prepareStatement(query);
	        myStmt.setInt(2, 101);
	        myStmt.setString(1, "Divya");
	        ResultSet myRs = myStmt.executeQuery();
	        System.out.println("secure Statement");
	        while (myRs.next()) {
	            System.out.println("UserName "+ myRs.getString("u_name")+", UserId "+myRs.getInt("u_Id"));
	        }
	   }
	      catch (SQLException e) {
	         e.printStackTrace();
	      } 
	}
}

