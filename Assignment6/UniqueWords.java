
import java.util.*;
public class UniqueWords {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Sentence");
        String sentence=sc.nextLine();
        String[] words = sentence.split(" ");
        HashSet<String> uniqueWords = new HashSet<>();
        for (String word : words) {
            uniqueWords.add(word);
        }
        StringJoiner join = new StringJoiner(" "); 
        for (String word : uniqueWords) {
            join.add(word);
        }
        System.out.println("Sentence after removing duplicates using hasset : " +join.toString());
    }
}