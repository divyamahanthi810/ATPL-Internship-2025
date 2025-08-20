import java.io.*;

public class AppendFiles {

    public static void main(String[] args) {
        try (BufferedReader reader1 = new BufferedReader(new FileReader("file1.txt"));
             BufferedReader reader2 = new BufferedReader(new FileReader("file2.txt"));
             BufferedWriter writer = new BufferedWriter(new FileWriter("newFile.txt"))) {
            String line;
            while ((line = reader1.readLine()) != null) {
                writer.write(line);
                writer.newLine(); 
            }
            while ((line = reader2.readLine()) != null) {
                writer.write(line);
                writer.newLine(); 
            }
            System.out.println("Data from 2 files added to new file successfully.");
        } catch (IOException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }
}