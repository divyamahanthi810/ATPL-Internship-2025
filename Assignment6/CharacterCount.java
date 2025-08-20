import java.util.*;
class CharacterCount {
    public static void main(String[] args)
    {
        Map<Character, Integer> Count= new HashMap<>();  
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter word");
        String str=sc.nextLine();
        str=str.toLowerCase();
        char[] strArray = str.toCharArray();
        for (char c : strArray) {
            if (Count.containsKey(c)) {
                Count.put(c, Count.get(c) + 1);
            }
            else {
                Count.put(c, 1);
            }
        }
        System.out.println("Count of letters in word");
        for (Map.Entry entry : Count.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
    }
}