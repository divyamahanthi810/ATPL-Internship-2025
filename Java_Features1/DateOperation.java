import java.time.LocalDate;
public class DateOperation {
    public static void main(String args[])
    {
        LocalDate P=LocalDate.now();
        System.out.println("Today: "+P);
        LocalDate hDate=P.plusDays(10);
        LocalDate mDate=hDate.minusMonths(2);
        System.out.println("After adding 10 days: "+hDate);
        System.out.println("After Subtracting 2 months: "+mDate);   
    }
}
