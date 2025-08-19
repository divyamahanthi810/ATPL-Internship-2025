import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;
public class Palindrome {
    public static void main(String args[]){
        String a="Madam";
        String p="",q="";
        Deque<Character> dq=new ArrayDeque<>();
        for(int i=0;i<a.length();i++)
        {
            Character c=a.charAt(i);
            dq.add(c);
        }
        Iterator i=dq.iterator();
        while(i.hasNext())
        {
            p+=i.next();
        }
        p=p.toLowerCase();
        System.out.println(p);
        Iterator m=dq.descendingIterator();
        while(m.hasNext())
        {
            q+=m.next();
        }
        q=q.toLowerCase();
        System.out.println(q);
        if(p.equals(q)){
            System.out.println("Palindrome");
        }else{
            System.out.println("Not Palindrome");
        }
        
    }
    
}
