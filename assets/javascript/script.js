let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Ensure index stays within bounds
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Move to the selected slide
    const offset = -currentSlide * 100; // Offset in percentage
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize the first slide
showSlide(0);
import java.util.Scanner;

public class ClothingStoreChatbot {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String userInput;
        
        // Greeting the user
        System.out.println("Hi there! Welcome to our Clothing Store Chatbot. How can I assist you today? 😊");
        
        // Chat loop
        while (true) {
            System.out.print("You: ");
            userInput = scanner.nextLine().toLowerCase();

            // Exit condition
            if (userInput.equals("exit") || userInput.equals("bye")) {
                System.out.println("Chatbot: Thank you for visiting! Have a great day. 👋");
                break;
            }

            // Bot responses
            String botResponse = getBotResponse(userInput);
            System.out.println("Chatbot: " + botResponse);
        }
        
        scanner.close();
    }

    // Method to process user input and return bot responses
    public static String getBotResponse(String input) {
        if (input.contains("hi") || input.contains("hello") || input.contains("hey")) {
            return "Hello! How can I help you with our clothing today?";
        } else if (input.contains("product") || input.contains("clothes")) {
            return "We offer a wide range of clothes for men, women, and kids. Do you need recommendations?";
        } else if (input.contains("sale") || input.contains("discount")) {
            return "We currently have up to 30% off on selected items! Visit our website's Sale section for more.";
        } else if (input.contains("shipping") || input.contains("delivery")) {
            return "We offer free shipping for orders above $50. Standard delivery takes 3-5 business days.";
        } else if (input.contains("return") || input.contains("refund")) {
            return "You can return items within 30 days. Please check our Return Policy for more details.";
        } else if (input.contains("thanks") || input.contains("thank you")) {
            return "You're welcome! Let me know if there's anything else I can assist you with. 😊";
        } else {
            return "I'm sorry, I didn't quite understand that. Can you please rephrase?";
        }
    }
}