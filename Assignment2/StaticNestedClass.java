class SystemUtils {
    public static class Logger {
        public static void log(String message) {
            System.out.println("Log: " + message);
        }
    }
}

public class StaticNestedClass {
    public static void main(String[] args) {
        SystemUtils.Logger.log("Application started");
        System.out.println("work in progrsss");
        SystemUtils.Logger.log("Application finished");
    }
}

     
