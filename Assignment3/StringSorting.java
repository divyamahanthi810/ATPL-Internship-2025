import java.util.Collections;
import java.util.Arrays; 
public class StringSorting {
    public static void main(String[] args) 
    {   
    String[] names = {"Divya","Anu","Priya","Geetika","Ramya"};
    System.out.println("Array sorted in Ascending Order");
    Arrays.sort(names);
    for(String i:names){
    System.out.println(i);
    }
    System.out.println("Array sorted in Descending Order");
    Arrays.sort(names, Collections.reverseOrder());
    for(String i:names){
    System.out.println(i);
    }
    }
}
