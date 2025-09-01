import java.util.Optional;
import java.util.function.Supplier;

public class LazyConfiguration {
    public static void main(String[] args) {
        String javaPath = System.getenv("JavaPath");

        Optional<String> javaPathOptional = Optional.ofNullable(javaPath);

        Supplier<String> loadJavaPath = () ->{
            System.out.println("Java Path not set.Loading the java path...");
            return "C:Program Files/Java/jdk1.8";
        };

        String JavaPath = javaPathOptional.orElseGet(loadJavaPath);
        System.out.println("Final Java Path: "+JavaPath);
    }
}