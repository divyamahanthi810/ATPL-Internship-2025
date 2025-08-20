import java.io.*;
import java.util.*;
import java.util.Map.Entry;
public class FrequencyCount {

    public static void main(String[] args) {
        String inputFile = "input.txt";
        String outputFile = "word_frequencies.txt";
        Map<String, Integer> wordCount = new HashMap<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] words = line.toLowerCase().split(" ");
                for (String word : words) {
                    if (!word.isEmpty()) {
                        wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
                    }
                }
            }
        } catch (FileNotFoundException e) {
            System.err.println("Error: Input file not found -> " + inputFile);
            return;
        } catch (IOException e) {
            System.err.println("Error reading the input file: " + e.getMessage());
            return;
        }
        List<Entry<String, Integer>> sortedList = new ArrayList<>(wordCount.entrySet());
        sortedList.sort((a, b) -> b.getValue().compareTo(a.getValue()));
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
            for (Entry<String, Integer> entry : sortedList) {
                writer.write(entry.getKey() + " : " + entry.getValue());
                writer.newLine();
            }
            System.out.println("Word frequencies written to " + outputFile);
        } catch (IOException e) {
            System.err.println("Error writing to the output file: " + e.getMessage());
        }
    }
}