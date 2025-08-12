import java.io.*;
import java.util.Scanner;
public class TryWithScanner {
    static void scanFile(String test) throws IOException
    {
        try(Scanner sc=new Scanner(new File("test.txt"))){
             while (sc.hasNextLine()) {
                String line = sc.nextLine();
                System.out.println(line);
        } 
    }
}
    public static void main(String args[]){
        try{
            scanFile("test.txt");
        }
        catch(IOException e){
            System.out.println("IOException caught "+e.getMessage());
        }

    } 
}
