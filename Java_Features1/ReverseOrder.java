import java.util.Arrays;
import java.util.List;
import java.util.Collections;
public class ReverseOrder {
    public static void main(String args[])
    {
        List<String> ls=Arrays.asList("Banana", "Apple", "Mango", "Cherry");
        ls.forEach(n-> {
            Collections.sort(ls);
        });
        System.out.println(ls);
    }
}
