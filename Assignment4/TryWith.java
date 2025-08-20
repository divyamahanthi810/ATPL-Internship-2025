import java.io.*;
class TryWith {
    static void readFileSafely(String s) throws IOException{
    try(BufferedReader br = new BufferedReader(new FileReader("sample.txt"))) {
      while ((s = br.readLine()) != null) {
        System.out.println(s);
      }
    }
}
  public static void main(String[] args) {
     try{
        readFileSafely("sample.txt");
     }
     catch (IOException e) {
      System.out.println("IOException in try block =>" + e.getMessage());
    }
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        