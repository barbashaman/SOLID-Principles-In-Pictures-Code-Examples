/**
 * BETTER Example for Dependency Inversion Principle
 * 
 * By introducing an abstraction (NotificationProvider interface),
 * high-level modules depend on abstractions instead of concrete implementations.
 * 
 * Benefits:
 * - EmailService depends on NotificationProvider abstraction, not concrete classes
 * - Easy to swap implementations (Email, SMS, Slack, etc.)
 * - Easy to test with mock providers
 * - Loose coupling - changing providers doesn't affect EmailService
 * - Follows open/closed principle
 */

// Abstraction - High-level modules depend on this
interface NotificationProvider {
    send(recipient: string, message: string): void;
}

// Concrete implementation 1 - Email
class BetterEmailProvider implements NotificationProvider {
    send(recipient: string, message: string): void {
        console.log(`Sending email to ${recipient}: ${message}`);
    }
}

// Concrete implementation 2 - SMS (easy to add new implementations)
class SMSProvider implements NotificationProvider {
    send(recipient: string, message: string): void {
        console.log(`Sending SMS to ${recipient}: ${message}`);
    }
}

// High-level class depends on abstraction, not concrete classes
class NotificationService {
    private provider: NotificationProvider; // DIP: Depends on abstraction

    constructor(provider: NotificationProvider) {
        this.provider = provider; // Injected dependency
    }

    notifyUser(recipient: string, message: string): void {
        this.provider.send(recipient, message);
    }
}

// Usage - flexible and testable
const emailProvider = new BetterEmailProvider();
const emailService = new NotificationService(emailProvider);
emailService.notifyUser("user@example.com", "Hello!");

// Easy to switch to SMS without changing NotificationService
const smsProvider = new SMSProvider();
const smsService = new NotificationService(smsProvider);
smsService.notifyUser("+1234567890", "Hello!");