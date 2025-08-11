public class StringSentence {
    public static void main(String args[]){
        String s=new String("Learning Java is fun and intresting");
        int a=s.split(" ").length;
        int b=s.indexOf("i");
        int c=s.lastIndexOf("i");
        boolean d=s.startsWith("Learn");
        boolean e=s.endsWith("ing");
        System.out.println("Length of String "+a);
        System.out.println("first indexof char i "+b);
        System.out.println("last indexof char i "+c);
        System.out.println("Do String start with Learn "+d);
        System.out.println("Do String ends with i "+e);
    }
    
}
