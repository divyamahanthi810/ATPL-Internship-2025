package intern;

import java.sql.*;
public class FetchProduct {
		   static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
		   static final String USER = "intern2025";
		   static final String PASS = "intern2025";
		   static final String QUERY = "select * from products_divya where p_price between ? and ?";;
		   public static void main(String[] args) {
		      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
		    		  PreparedStatement pstmt = conn.prepareStatement(QUERY);){
		    	  		pstmt.setDouble(1, 20000.0);
		    	  		pstmt.setDouble(2, 50000.0);
		    		  	ResultSet rs = pstmt.executeQuery();
		            	while(rs.next()) {
		            		System.out.println("Product: Id " +rs.getInt("p_Id")+", Name "+rs.getString("p_name")+", Price "+rs.getInt("p_price"));
		            	}
		         }
		      catch (SQLException e) {
		         e.printStackTrace();
		      } 
		   }
	}


