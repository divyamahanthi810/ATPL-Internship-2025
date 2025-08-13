import java.util.*;
class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> names=new ArrayList<>();
        names.add("Divya");
        names.add("Gowri");
        names.add("suhashini");
        names.add("preethi");
        names.add("keerthi");
        System.out.println("Using for loop");
        for(int i=0;i<names.size();i++)
        {
            System.out.println(names.get(i)+" ");
        }
        names.remove(3);
        System.out.println("Using enhanced loop printing updated list");
        for(String i:names){
       System.out.println(i);
        }
    }
}