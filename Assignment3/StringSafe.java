import java.util.*;
public class StringSafe {
    public void Encrypt(String s1){
        s1.concat(" World");
        System.out.println(s1);

    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Password");
        String s1=sc.nextLine();
        StringSafe s=new StringSafe();
        s.Encrypt("HI");
        System.out.println(s1);
        }
    }
