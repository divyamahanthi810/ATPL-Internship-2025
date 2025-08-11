import java.util.*;
import java.util.Arrays;
public class StringConcat {
    public static void main(String[] args) {
        List<String> str = Arrays.asList("Concept","is","String");
        long start=System.nanoTime();
        String c="";
        for(int i=0;i<str.size();i++){
            c+=str.get(i);
        }
        System.out.println(c);
        long end=System.nanoTime();
        System.out.println(end-start);
        //string builder
        long start1=System.nanoTime();
        StringBuilder s1=new StringBuilder();
        for(int i=0;i<str.size();i++){
        s1.append(str.get(i));
        s1.append(" ");
        }
        long end1=System.nanoTime();
        System.out.println(s1);
        System.out.println(end1-start1);
        //string buffer
        long start2=System.nanoTime();
        StringBuffer s2=new StringBuffer();
        for(int i=0;i<str.size();i++){
        s2.append(str.get(i));
        s1.append(" ");
        }
        long end2=System.nanoTime();
        System.out.println(s1);
        System.out.println(end2-start2);   
    }
    
}
