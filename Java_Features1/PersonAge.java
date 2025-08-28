import java.time.LocalDate;
import java.time.Period;

public class PersonAge {
    public static void main(String[] args) {
        LocalDate m=LocalDate.of(2003, 10, 8);
        LocalDate l=LocalDate.now();
        Period p=Period.between(m, l);
        System.out.println("Age is: "+p.toString());
    }
}
