import java.util.*;
public class StringSafe {
    static String encryptpassword(String password){
        StringBuffer sb=new StringBuffer();
        for(char c:password.toCharArray())
        {
            sb.append((char) (c-2));
        }
        return sb.toString();

    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Password");
        String s1=sc.nextLine();
        String Encrypt=encryptpassword(s1);
        System.out.println("OriginalString "+s1);
        System.out.println("EncryptedString "+Encrypt);
        }
    }
