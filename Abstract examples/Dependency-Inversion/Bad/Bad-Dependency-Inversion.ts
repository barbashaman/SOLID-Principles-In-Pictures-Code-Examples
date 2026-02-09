/**
 * BAD Example for Dependency Inversion Principle
 * 
 * Dependency Inversion Principle states that:
 * - High-level modules should not depend on low-level modules
 * - Both should depend on abstractions
 * - Depend on abstractions, not concrete implementations
 * 
 * This example violates DIP because:
 * - EmailService directly depends on concrete EmailProvider class
 * - If EmailProvider changes, EmailService breaks
 * - Hard to test (can't mock EmailProvider)
 * - Hard to swap implementations (e.g., switch to SMS or Slack)
 */

// Concrete low-level class
class EmailProvider {
    sendEmail(recipient: string, message: string): void {
        console.log(`Sending email to ${recipient}: ${message}`);
    }
}

// High-level class depends directly on concrete EmailProvider
class EmailService {
    private emailProvider: EmailProvider; // DIP Violation: Direct dependency on concrete class

    constructor() {
        this.emailProvider = new EmailProvider(); // Tightly coupled
    }

    notifyUser(email: string, message: string): void {
        this.emailProvider.sendEmail(email, message);
    }
}

// Usage - tightly coupled and inflexible
const service = new EmailService();
service.notifyUser("user@example.com", "Hello!");
