package intern;
import java.sql.*;
public class UpdateMultipleColumn {
			   static final String DB_URL = "jdbc:mysql://192.168.71.15:3306/intern";
			   static final String USER = "intern2025";
			   static final String PASS = "intern2025";
			   static final String QUERY = "Update users_divya set u_email=?,u_name=? where u_Id=?";
			   public static void main(String[] args) {
			      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			    		  PreparedStatement pstmt = conn.prepareStatement(QUERY);){
			    	  		pstmt.setString(1, "vinay123@gmail.com");
			    	  		pstmt.setString(2, "vinayvarma");
			    	  		pstmt.setInt(3, 101);
			    	  		pstmt.addBatch();
			    	  		
			    	  		pstmt.setString(1, "murali@gmail.com");
			    	  		pstmt.setString(2, "muralikrishna");
			    	  		pstmt.setInt(3, 104);
			    	  		pstmt.addBatch();
			    		  int rs[] = pstmt.executeBatch();
			            System.out.print("Updated rows: " + rs);
			         }
			      catch (SQLException e) {
			         e.printStackTrace();
			      } 
			   }
		}



