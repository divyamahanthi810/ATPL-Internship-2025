public class StringImmutable {
    public static void main(String args[]){
        String s1= "Hello"; 
        String s2 = s1; 
        s1 = s1.concat(" World"); 

        System.out.println("String after Concate "+s1);
        System.out.println("Original String "+s2);
    }
}
