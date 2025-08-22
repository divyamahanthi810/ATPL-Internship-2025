import java.io.*;
import java.text.MessageFormat;
public class Deserialize {
    public static void main(String[] args) throws EOFException {
        String filename = "file.ser";

        try (FileInputStream file = new FileInputStream(filename);
             ObjectInputStream in = new ObjectInputStream(file)) {

            System.out.println("Deserialized Data from file:"+filename);

            while (true) {
                try {
                    String[] row = (String[]) in.readObject();
                    String sentence=MessageFormat.format("Name: {0} Age: {1} Dept: {2} CGPA: {3}", (Object[]) row);
                    System.out.println(sentence);
                } catch (EOFException e) {
                    break; 
                }
            }


        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Exception is caught: " + e);
        }
    }
}