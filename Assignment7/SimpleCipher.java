import java.io.*;
import java.util.Scanner;

public class SimpleCipher {

    private static final int SHIFT = 3; 
    private static String encrypt(String message) {
        StringBuilder encrypted = new StringBuilder();
        for (char c : message.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isUpperCase(c) ? 'A' : 'a';
                encrypted.append((char) ((c - base + SHIFT) % 26 + base));
            } else {
                encrypted.append(c);
            }
        }
        return encrypted.toString();
    }
    private static String decrypt(String encryptedMessage) {
        StringBuilder decrypted = new StringBuilder();
        for (char c : encryptedMessage.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isUpperCase(c) ? 'A' : 'a';
                decrypted.append((char) ((c - base - SHIFT + 26) % 26 + base));
            } else {
                decrypted.append(c);
            }
        }
        return decrypted.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a message to encrypt: ");
        String message = scanner.nextLine();

        if (message.isEmpty()) {
            System.out.println("Message cannot be empty!");
            return;
        }

        String encryptedMessage = encrypt(message);

        // Write encrypted message to file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("encrypted.txt"))) {
            writer.write(encryptedMessage);
            System.out.println("Message encrypted and saved to encrypted.txt");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
            return;
        }
        try (BufferedReader reader = new BufferedReader(new FileReader("encrypted.txt"))) {
            String line = reader.readLine();
            if (line != null) {
                String decryptedMessage = decrypt(line);
                System.out.println("Decrypted message: " + decryptedMessage);
            } else {
                System.out.println("Encrypted file is empty.");
            }
        } catch (IOException e) {
            System.out.println("Error reading from file: " + e.getMessage());
        }
    }
}
