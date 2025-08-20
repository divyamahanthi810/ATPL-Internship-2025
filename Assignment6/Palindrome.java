import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;
import java.util.Scanner;
public class Palindrome {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter word");
        String a=sc.nextLine();
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
        Iterator m=dq.descendingIterator();
        while(m.hasNext())
        {
            q+=m.next();
        }
        q=q.toLowerCase();
        if(p.equals(q)){
            System.out.println(a+" is Palindrome");
        }else{
            System.out.println(a+ " is Not a Palindrome");
        }
        
    }
    
}
