public class StringIntern {
    public static void main(String args[])
    {
        String a = new String("Hello"); // Creates a new String object in the Heap
        String b =a.intern();         // Interns help to move memory into string pool
        String c ="Hello";    // References a string literal in the String Pool
        System.out.println("Comparison between a,b")  ;
        if(a == b){
        System.out.println("True as both are in Same memory")  ;  
        }  
        else{
            System.out.println("False as both are in Different memory as one refer heap and other string pool") ;  // false (different objects in memory)
        }
        System.out.println("Comparison between b,c")  ;
        if(b == c){
        System.out.println("True as both are in Same memory")  ;  
        }  
        else{
            System.out.println("False as both are in Different memory as one refer heap and other string pool") ;  // false (different objects in memory)
        }
        System.out.println("Comparison between a,c")  ;
        if(a == c){
        System.out.println("True as both are in Same memory")  ;  
        }  
        else{
            System.out.println("False as both are in Different memory as one refer heap and other string pool") ;  // false (different objects in memory)
        } // true (both now refer to the same object in the String Pool)

    }
    
}
