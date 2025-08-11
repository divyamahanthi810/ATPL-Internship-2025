public class StringMethod {
    public static void main(String args[]){
        String s=new String("  Java Programming");
        String a=s.trim();
        String b=s.toLowerCase();
        String c=s.toUpperCase();
        String d=s.replace("Programming","Class");
        String e=s.substring(5);
        int f=s.indexOf("Java");
        System.out.println("Trimmed String "+a);
        System.out.println("lower case String "+b);
        System.out.println("UpperCase String "+c);
        System.out.println("Replace String "+d);
        System.out.println("Sub String "+e);
        System.out.println("IndexOf method "+f);
    }
    
}
