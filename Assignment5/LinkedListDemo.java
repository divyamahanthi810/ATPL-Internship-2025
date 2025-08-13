import java.util.*;
class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList<Integer> numbers=new LinkedList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);
        System.out.println("Linked List before insertion and deletion");
        for(int i=0;i<numbers.size();i++)
        {
            System.out.println(numbers.get(i)+" ");
        }
        int n=numbers.size();
        numbers.add(0,5);
        numbers.add(n+1,60);
        numbers.remove(2);
        System.out.println("Linked List after insertion and deletion");
        
        for(int i:numbers){
       System.out.println(i);
        }
    }
}
