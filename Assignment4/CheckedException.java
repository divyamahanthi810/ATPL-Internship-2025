import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
public class CheckedException {
    static void loadFile() throws FileNotFoundException,IOException{
        FileInputStream fr = new FileInputStream("test.txt");
        fr.read();
        int ch;
            while ((ch = fr.read()) != -1) {
                System.out.print((char)ch);
            }
        fr.close();
    }
    public static void main(String[] args) {
        try
        {
            loadFile();
        }
        catch(FileNotFoundException f)
        {
            System.out.println(
                "File not found:Check wheather File Exists.");
        }
        catch(IOException e)
        {
            System.out.println("Throw I0Exception");
        }
    }
}

