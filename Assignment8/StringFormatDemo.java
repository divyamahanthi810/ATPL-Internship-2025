    import java.io.FileWriter;
    import java.io.IOException;
    import java.io.PrintWriter;
    import java.util.ArrayList;
    import java.util.List;
    public class StringFormatDemo {
        public static void main(String[] args) {
            String formatString = " %-10s  %-10s  %-10s %10s%n";
            List<String[]> data = new ArrayList<>();
            data.add(new String[]{"Name", "Age", "Deaprtment","GPA"}); 
            data.add(new String[]{"John", "21", "CSE","9.01"});
            data.add(new String[]{"Priya", "22", "ECE","8.5"});
            data.add(new String[]{"Ram", "21", "EEE","7.93"});
            try (PrintWriter writer = new PrintWriter(new FileWriter("output.txt"))) {
                for (String[] row : data) {
                    writer.printf(formatString, (Object[]) row);
                }
                System.out.println("Table successfully written to output.txt");
            } catch (IOException e) {
                System.err.println("Error writing to file: " + e.getMessage());
            }
        }
    }