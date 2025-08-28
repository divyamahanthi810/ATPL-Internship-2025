import java.util.List;
import java.util.Arrays;
public class EvenNumbers{
    public static void main(String args[])
    {
        List<Integer> ls=Arrays.asList(1,2,3,4,5,6,7,8,9,10);
        ls.forEach(n-> {
            if(n%2==0)
            {
                System.out.print(n+" ");
            }
        });
    }
}