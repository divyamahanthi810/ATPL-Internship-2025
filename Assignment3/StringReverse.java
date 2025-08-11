public class StringReverse {
    public static void main(String args[]){
    //Using Loop
    String a=new String("Reverse");
    String n="";
    char c;
    for(int i=0;i<a.length();i++)
    {
        c=a.charAt(i);
        n=c+n;
    }
    System.out.println(n);
    //String Builder
    StringBuilder s=new StringBuilder("Hello");
    s.reverse();
    System.out.println(s);
    //String Buffer
    StringBuffer b=new StringBuffer("Madam");
    b.reverse();
    System.out.println(b);
    }
    
}
