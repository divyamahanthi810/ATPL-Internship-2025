import java.util.Arrays;
import java.util.List;
import java.util.stream.*;
public class Filter {
    public static void main(String args[]){
        List<String> ls=Arrays.asList("Alice", "Bob", "Andrew", "Tom", "Angela", "Steve");
        List<String> filteredNames = ls.stream()
                                             .filter(name -> name.startsWith("A"))
                                             .collect(Collectors.toList());
     System.out.println("Names starting with 'A': " + filteredNames);
}
}