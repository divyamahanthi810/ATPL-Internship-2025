import java.util.*;
public class StudentRecords 
{
    public static void main(String args[])
    {
        Map<String,Integer>hm=new HashMap<>();
        hm.put("Divya",195);
        hm.put("sanjay",120);
        hm.put("Dia",130);
        hm.put("jay",160);
        hm.put("Reshma",70);
        System.out.println(hm);
        int minval=(Collections.min(hm.values()));
        int maxval=(Collections.max(hm.values()));
        for(Map.Entry m:hm.entrySet())
        {
            if(m.getValue().equals(minval)){
                System.out.println("Minimum marks obtained student is:"+m.getKey()+" with marks "+m.getValue());
            }
            if(m.getValue().equals(maxval)){
                System.out.println("Maximum marks obtained student is:"+m.getKey()+" with marks "+m.getValue());
            }
        }
}
}
