public class Student {
    private static String schoolName;

    public static String getName() {
        return schoolName;
    }

    public static void setName(String schoolName) {
        Student.schoolName = schoolName;
    }
    public static void main(String[] args) {
       
        Student stud1 = new Student();
        Student stud2 = new Student();
        stud1.setName("ABC High School");
        System.out.println("Student 1 School Name: " + stud2.getName());
        System.out.println("School Name using class name: " + Student.getName());
    }
}


