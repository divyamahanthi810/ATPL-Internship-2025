package intern;
import java.sql.*;
public class ConnectSql {
			   static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
			   static final String USER = "intern2025";
			   static final String PASS = "intern2025";
			   static final String QUERY = "SELECT * FROM products_divya";

			   public static void main(String[] args) {
			      // Open a connection
			      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			    		  Statement stmt = conn.createStatement();){
			    		  ResultSet rs = stmt.executeQuery(QUERY);
		
			         // Extract data from result set
			         while (rs.next()) {
			            // Retrieve by column name
			            System.out.print("Product ID: " + rs.getInt("p_Id")+", Product Name: " + rs.getString("p_name")+", Product Price: " + rs.getInt("p_price")+"\n");
			         }
			      } catch (SQLException e) {
			         e.printStackTrace();
			      } 
			   }
	}

