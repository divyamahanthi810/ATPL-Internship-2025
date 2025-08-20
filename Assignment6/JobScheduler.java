
import java.util.*;
class JobScheduler {
    public static void main(String[] args) {
        
        Queue<String> documents=new LinkedList<>();
        documents.add("Doc1");
        documents.add("Doc2");
        documents.add("Doc3");
        documents.add("Doc4");
        documents.add("Doc5");
        documents.remove();
        documents.remove();
        System.out.println(documents);
        
    }
}