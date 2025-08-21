import java.io.*;
public class Deserialize {
    public static void main(String[] args) {

        // Deserialization
        try {
            FileInputStream file = new FileInputStream("file.ser");
            ObjectInputStream in = new ObjectInputStream(file);
            List<String> deserializedList = (ArrayList<String>) in.readObject();
            in.close();
            file.close();
            System.out.println("Object has been deserialized");
            System.out.println(deserializedList);

        } catch (IOException ex) {
            System.out.println("IOException is caught");
        } catch (ClassNotFoundException ex) {
            System.out.println("ClassNotFoundException is caught");
        }
    }
}