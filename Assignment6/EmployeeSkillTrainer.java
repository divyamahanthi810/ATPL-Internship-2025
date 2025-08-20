import java.util.*;
public class EmployeeSkillTrainer {
    public static void main(String[] args) {
    Map<String,Set<String>> skills= new HashMap<>();
    skills.put("Divya",new HashSet<>(Arrays.asList("Java","Python")));
    skills.put("Priya",new HashSet<>(Arrays.asList("Python","SQL")));
    skills.put("Naveen",new HashSet<>(Arrays.asList("C++","C")));
    skills.put("Dileep",new HashSet<>(Arrays.asList("Java","C","Python")));
    String specificSkill="Java";
    System.out.println("Employees with Specific skill " + specificSkill );
    for(Map.Entry<String,Set<String>> entry : skills.entrySet()) {
        if(entry.getValue().contains(specificSkill)) {
            System.out.println(entry.getKey());
        }
    }
    Set<String> skillsA = skills.get("Naveen");
    Set<String> skillsB = skills.get("Dileep");
    Set<String> common = new HashSet<>(skillsA);
    common.retainAll(skillsB);
     System.out.println("Common skills between Naveen and dillep: " + common);
    }
}