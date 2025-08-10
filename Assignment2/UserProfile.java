class UserProfile{
    private String username;
    private String email;
    private String password;
    public String getName(){
        return username;
    }
    public void setName(String username){
         if (username == null || username.isEmpty()) {
            System.out.println("Username is required");
        }
        this.username = username;
    }

     public String getMail(){
        return email;
    }
     public void setMail(String email){
        if(email == null || !email.contains("@gmail.com"))
        {
            System.out.println("Email is invalid");
        }
        this.email=email;
    }
   public String getPassword(){
        return password;
    }
     public void setPassword(String password){
        if (password == null || password.length() < 8) {
            System.out.println("Password must be at least 8 characters long");
        } 
        else {
            this.password = password;
        }
    }
    public static void main(String args[]){
        UserProfile p1=new UserProfile();
        p1.setName("Divya");
        p1.setMail("divya5@gmail.com");
        p1.setPassword("123456789");
        System.out.println("Name: " + p1.getName());
        System.out.println("Email: " + p1.getMail());
        System.out.println("Password: " + p1.getPassword());
    }
        
}


