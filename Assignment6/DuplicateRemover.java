import java.util.*;
public class DuplicateRemover {

    public static void main(String[] args) {
        List<Integer> l=Arrays.asList(1,2,3,6,1,2,3,4,5);
        Set<Integer> uniqueWords = new HashSet<>();
        for (int i : l) {
            uniqueWords.add(i);
        }
        System.out.println(uniqueWords);
    }
}
