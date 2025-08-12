import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FileNotFoundDemo {
    public static void main(String args[]) throws IOException,FileNotFoundException
    {
        try
        {
        FileInputStream fr = new FileInputStream("test.txt");
        fr.read();
        int ch;
            while ((ch = fr.read()) != -1) {
                System.out.print((char)ch);
            }
        fr.close();
        }
        catch(FileNotFoundException e)
        {
            System.out.println("File missing is handled in Catch");
        }
}
}
