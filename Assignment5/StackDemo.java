import java.util.*;
class StackDemo {
    public static void main(String[] args) {
        Stack<Integer> items=new Stack<>();
        items.push(1);
        items.push(5);
        items.push(2);
        items.push(4);
        items.push(3);
        System.out.println("Stack after push");
        for(int i:items){
            System.out.println(i);
        }
        items.pop();
        items.pop();
        System.out.println("Stack after deleting 2 elements");
        
        for(int i:items){
       System.out.println(i);
        }
    }
}
