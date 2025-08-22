import java.util.*;
public class MapProduct {
    public static void main(String args[]){
        Map<String,Integer> hm=new HashMap<>();
        hm.put("phone",25000);
        hm.put("Laptop",45000);
        hm.put("jeans",800);
        hm.put("spects",400);
        Iterator<Map.Entry <String,Integer>> i=hm.entrySet().iterator();
        {
            while(i.hasNext()){
                Map.Entry<String,Integer> e=i.next();
                System.out.println("Price of "+e.getKey()+" is "+e.getValue());
            }
        }
    }
}
