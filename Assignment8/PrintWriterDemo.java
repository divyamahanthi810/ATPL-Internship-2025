import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class PrintWriterDemo {
    String Name;
    int Age;
    String Department;
    Double GPA;
    public PrintWriterDemo(String Name,int Age,String Department,Double GPA){
        this.Name=Name;
        this.Age=Age;
        this.Department=Department;
        this.GPA=GPA;
    }
    public void student() throws FileNotFoundException{
        PrintWriter pw=new PrintWriter("tes.txt");
        pw.printf("Enrolled student of name %s age of %d into branch %s with gpa of %.1f",Name,Age,Department,GPA);
        pw.close();
        
    }
    public static void main(String[] args) throws FileNotFoundException {
        PrintWriterDemo p=new PrintWriterDemo("Divya", 21, "CSE", 9.01);
        p.student();
        
    }
}
