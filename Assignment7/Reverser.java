import java.io.*;

public class Reverser {

    public static void main(String[] args) {
        String inputFile = "reverseinput.txt";
        String outputFile = "reverseoutput.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile));
             BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {

            String line;
            while ((line = reader.readLine()) != null) {
                String reversedLine = new StringBuilder(line).reverse().toString();
                writer.write(reversedLine);
            }
            System.out.println("File successfully reversed and saved to " + outputFile);

        } catch (IOException e) {
            System.err.println("An error occurred during file processing: " + e.getMessage());
        }
    }
}