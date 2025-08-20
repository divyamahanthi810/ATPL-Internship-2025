import java.util.*;
public class SetMethods {
    public static void main(String[] args) {
        List<Integer> list1=Arrays.asList(1,2,3,4,1,2);
        List<Integer> list2=Arrays.asList(3,4,5,6,3,4);
        Set<Integer> seta = new HashSet<>();
        for (int i : list1) {
            seta.add(i);
        }
        System.out.println("Set A: "+seta);
        Set<Integer> setb = new HashSet<>();
        for (int i : list2) {
            setb.add(i);
        }
        System.out.println("Set B: "+setb);
        seta.retainAll(setb);
        System.out.println("Intersection Set A: "+seta);
         setb.removeAll(seta);
        System.out.println("Difference in Set B: "+setb);
        setb.addAll(seta);
        System.out.println("Union: "+setb);
    }
}