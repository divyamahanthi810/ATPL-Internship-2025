import java.util.Arrays;
import java.util.List;
import java.util.Collections;
public class Comparator {
    public static void main(String args[])
    {
        List<Integer> ls=Arrays.asList(5, 2, 8, 1, 9);
        Collections.sort(ls, (num1, num2) -> Integer.compare(num2, num1));
        System.out.println(ls);
    }
}
