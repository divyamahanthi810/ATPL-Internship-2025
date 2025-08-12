 class LoginFailedException extends Exception{

    LoginFailedException(String m){
        super(m);
    }
}

class CustomExpection{
    static void login(String username,String password) throws LoginFailedException{
        if(username.length()<5 || password.length()<5 || !password.contains("gmail.com")){
            throw new LoginFailedException(("Invalid Details"));
        }
        System.out.println("Valid Credentails");

    }
    public static void main(String[] args) {
        try{
            login("xyz","123");
        }
        catch(LoginFailedException e){
            System.out.println("Handled");
            System.out.println(e.getStackTrace());
        }
    }
}
