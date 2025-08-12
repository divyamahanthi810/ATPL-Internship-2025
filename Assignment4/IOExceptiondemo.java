import java.io.*;
public class IOExceptiondemo {
    public static void main(String args[]) throws IOException{
        try{
            char array[]=new char[100];
            FileReader fr = new FileReader("student.txt");
            BufferedReader br = new BufferedReader(fr);
            br.read(array);
            System.out.println("file found: ");
            System.out.println(array);
            br.close();
        }
        catch(IOException e){
            System.out.println("Handled in Catch Block");
        }
        finally{
            System.out.println("IOException using throws");
        }
    }
    
}
