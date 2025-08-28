import java.time.LocalDate;

public class PrintDay {
    public static void main(String args[])
    {
        LocalDate P=LocalDate.now();
        System.out.println(P);
        LocalDate date=LocalDate.of(2025,12,25);
        System.out.println(date);
        System.out.println("Day of the week: "+date.getDayOfWeek());
    }
    
}
