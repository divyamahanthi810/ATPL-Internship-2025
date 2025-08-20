
import java.util.*;
import java.util.StringJoiner;
public class UniqueWords {
    public static void main(String[] args) {
        String sentence="Today is wednesday.This is the concert";
        String[] words = sentence.split(" ");
        HashSet<String> uniqueWords = new HashSet<>();
        for (String word : words) {
            uniqueWords.add(word);
        }
        StringJoiner join = new StringJoiner(" "); 
        for (String word : uniqueWords) 
        {
            join.add(word);
        }
        System.out.println("Sentence after removing duplicates using hasset : " +join.toString());
    }
}