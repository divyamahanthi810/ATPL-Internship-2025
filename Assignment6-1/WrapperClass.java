public class WrapperClass {
    public static void main(String args[]){
        int a=9;
        Integer b=a;
        System.out.println(b+" "+b.getClass());
        double doublep=2.09;
        Double Double=doublep;
        System.out.println(Double+" "+Double.getClass());
        char chara='A';
        Character charw=chara;
        System.out.println(charw+" "+charw.getClass());
        boolean c=true;
        Boolean d=c;
        System.out.println(d+" "+d.getClass());
    }
    
}
