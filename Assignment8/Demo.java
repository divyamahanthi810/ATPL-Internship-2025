import java.io.*;
import java.util.*;
public class Demo implements Serializable {
    public static void main(String[] args) {
        String filename = "file.ser";
        List<String[]> data = new ArrayList<>();
            data.add(new String[]{"John", "21", "CSE","9.01"});
            data.add(new String[]{"Priya", "22", "ECE","8.5"});
            data.add(new String[]{"Ram", "20", "EEE","7.93"});
            data.add(new String[]{"Ravi", "23", "ECE","8.09"});
            data.add(new String[]{"Kiran", "22", "EEE","7.5"});

        // Serialization
        try {
            FileOutputStream file = new FileOutputStream(filename);
            ObjectOutputStream out = new ObjectOutputStream(file);
            for (String[] row : data) {
                    out.writeObject((Object[]) row);
            }
            out.close();
            file.close();
            System.out.println("Object has been serialized");

        } catch (IOException ex) {
            System.out.println("IOException is caught");
        }
    }
}
