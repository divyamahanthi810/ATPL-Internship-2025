import java.util.*;
public class FrequencyCount{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter paragrapgh");
        String para=sc.nextLine();
        String[] array=para.split(" ");
        Map<String,Integer> hm=new HashMap<>();
        for (String c : array) {
            if (hm.containsKey(c)) {
                hm.put(c, hm.get(c) + 1);
            }
            else {
                hm.put(c, 1);
            }
        }
        System.out.println("Count of words from paragraph");
        for (Map.Entry entry : hm.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
        
    }
    
}
