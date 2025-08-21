import java.text.MessageFormat;
import java.util.*;
public class MessageFormatDemo {
    public static void main(String args[]){
        List<String[]> data = new ArrayList<>();
            data.add(new String[]{"John", "21", "CSE","9.01"});
            data.add(new String[]{"Priya", "22", "ECE","8.5"});
            data.add(new String[]{"Ram", "21", "EEE","7.93"});
            String msg= "Student {0} of age {1} from {2} department has secured GPA of {3}.\n";
            for (String[] row : data) 
            {
                    System.out.print(MessageFormat.format(msg, (Object[]) row));

            }
    }
}
