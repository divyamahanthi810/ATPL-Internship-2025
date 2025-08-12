import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
public class ThrowsException {
    static void readFile() throws IOException {
        char array[]=new char[100];
        FileReader fr = new FileReader("nonExistent.txt");
        BufferedReader br = new BufferedReader(fr);
        br.read(array);
        System.out.println("Data in the file: ");
        System.out.println(array);
        br.close();
    }
    public static void main(String[] args) {
        try
        {
            readFile();
        }
        catch(IOException e)
        {
            System.out.println("Should throw I0Exception,Caught in main");
        }
    }
}
