import java.util.*;
import java.util.Enumeration;
class VectorDemo {
    public static void main(String[] args) {
        Vector<Double> values=new Vector<>();
        values.add(1.09);
        values.add(5.85);
        values.add(3.22);
        values.add(0.86);
        Enumeration enumeration
            = Collections.enumeration(values);
        System.out.println(
            "Enumeration of Vector values:");
        while (enumeration.hasMoreElements()) {
            System.out.println(enumeration.nextElement());
        }
    }
}
