public class LoginFailedException extends Exception{
    LoginFailedException(String m)
    {
        super(m);
    }
    public static void main(String[] args) {
        try{
            throw new LoginFailedException("Invalid login details");
        }
        catch(LoginFailedException e)
        {

            System.out.println(e.getMessage());
            System.out.println(e.toString());
            System.out.println(e.getStackTrace());
        }
    }
}
