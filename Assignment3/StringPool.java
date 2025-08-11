public class StringPool {
    public static void main(String args[]){
        String s1="Java"; 
        String s2="Java"; 
        String s3 = new String("Java"); 
        if(s1==s2){
            System.out.println("s1,s2 references are same");
        }
        if(s2==s3){
            System.out.println("s2,s3 references are same");
        }
        else{
            System.out.println("s2,s3 references are Different");
        }
        if(s1==s3){
            System.out.println("s1,s2 references are same");
        }
        else{
            System.out.println("s1,s3 references are Different");
        }
        if(s1.equals(s3))
        {
            System.out.println("s1,s3 values are same");
        }
        if(s1.equals(s2))
        {
            System.out.println("s1,s2,s3 values are same");
        }

    }
    
}
