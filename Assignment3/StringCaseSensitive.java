public class StringCaseSensitive {
    public static void main(String args[]){
        String s1="Java";
        String s2="java";
        System.out.println("Comparing s1 and s2 with equals() "+s1.equals(s2));
        System.out.println("Comparing s1 and s2 with equalsIgnoreCase() "+s1.equalsIgnoreCase(s2));
        System.out.println("Comparing s1 and s2 with compareTo() "+s1.compareTo(s2));
    }
}
