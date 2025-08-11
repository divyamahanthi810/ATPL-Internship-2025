
import java.util.Arrays; 
public class StringSorting {
    public static void main(String[] args) 
    {   
    String[] names = {"Divya","Anu","Priya","Geetika","Ramya"};
    Arrays.sort(names);
    Arrays.sort(names).reverse();
    for(String i:names){
    System.out.println(i);
    }
    }
}
