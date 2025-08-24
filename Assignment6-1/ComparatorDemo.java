import java.util.*;

class Student {
    private int id;
    private String name;
    private int age;
    private int marks;

    public Student(int id, String name, int age, int marks) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public int getMarks() {
        return marks;
    }

    @Override
    public String toString() {
        return id + " " + name + " " + age + " " + marks;
    }
}

class NameComparator implements Comparator<Student> {
    public int compare(Student s1, Student s2) {
        return s1.getName().compareToIgnoreCase(s2.getName());
    }
}

class MarksDescendingComparator implements Comparator<Student> {
    public int compare(Student s1, Student s2) {
        return Integer.compare(s2.getMarks(), s1.getMarks());
    }
}

class AgeComparator implements Comparator<Student> {
    public int compare(Student s1, Student s2) {
        return Integer.compare(s1.getAge(), s2.getAge());
    }
}

public class ComparatorDemo {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();

        students.add(new Student(101, "Arjun", 22, 85));
        students.add(new Student(102, "Neha", 21, 92));
        students.add(new Student(103, "Pranav", 25, 72));
        students.add(new Student(104, "Rohit", 28, 92));
        students.add(new Student(105, "Meera", 18, 60));

        System.out.println("Original List:");
        for (Student s : students) {
            System.out.println(s);
        }

        // Sort by Name
        Collections.sort(students, new NameComparator());
        System.out.println("\nSorted by Name:");
        for (Student s : students) {
            System.out.println(s);
        }

        Collections.sort(students, new MarksDescendingComparator());
        System.out.println("\nSorted by Marks (descending):");
        for (Student s : students) {
            System.out.println(s);
        }

        Collections.sort(students, new AgeComparator());
        System.out.println("\nSorted by Age (ascending):");
        for (Student s : students) {
            System.out.println(s);
        }

        Collections.sort(students,
                Comparator.comparing(Student::getMarks, Comparator.reverseOrder())
                        .thenComparing(Student::getName)
        );

        System.out.println("\nSorted by Marks (desc), then Name (asc):");
        for (Student s : students) {
            System.out.println(s);
        }

        List<Integer> numbers = Arrays.asList(10, 3, 5, 7, 2, 9);
        numbers.sort(new Comparator<Integer>() {
            public int compare(Integer a, Integer b) {
                return b - a;
            }
        });

        System.out.println("\nIntegers sorted in descending order:");
        for (Integer n : numbers) {
            System.out.println(n);
        }
    }
}

