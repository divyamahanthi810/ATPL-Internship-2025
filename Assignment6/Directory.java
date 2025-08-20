import java.util.*;
public class Directory {
    public static void main(String args[])
    {
        Map<String,String>hm=new HashMap<>();
        hm.put("Divya","9765839342");
        hm.put("sanjay","78293124");
        hm.put("Dia","123456789");
        System.out.println(hm);
        hm.remove("Dia");
        System.out.println(hm);
        if(hm.containsKey("Divya"))
        {
            hm.put("Divya","9542789054");
        }
        System.out.println(hm);
    }
}