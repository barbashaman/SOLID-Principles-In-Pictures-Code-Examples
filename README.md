# SOLID Principles - Code Examples

This project provides practical, easy-to-understand examples of the **SOLID principles** in TypeScript. Each principle is demonstrated with both **Bad** (anti-pattern) and **Better** (correct) implementations.

## What is SOLID?

SOLID is an acronym for five design principles that help create more maintainable, scalable, and robust software:

- **S** - Single Responsibility Principle
- **O** - Open/Closed Principle
- **L** - Liskov Substitution Principle
- **I** - Interface Segregation Principle
- **D** - Dependency Inversion Principle

## Project Structure

Each principle has its own folder with two implementations:

```
SOLID/
├── SingleResponsibility/
│   ├── Bad/          # Violates SRP
│   └── Better/       # Follows SRP
├── Open-Closed/
│   ├── Bad/          # Violates OCP
│   └── Better/       # Follows OCP
├── Liskov-substitution/
│   ├── Bad/          # Violates LSP
│   └── Better/       # Follows LSP
├── Interface-Segregation/
│   ├── Bad/          # Violates ISP
│   └── Better/       # Follows ISP
├── Dependency-Inversion/
│   ├── Bad/          # Violates DIP
│   └── Better/       # Follows DIP
└── README.md
```

## The Five SOLID Principles

### 1. Single Responsibility Principle (SRP)
**A class should have only one reason to change.**

- **Bad Example**: A `Player` class handling stats, weapons, combat, inventory, and economy
- **Better Example**: Separate classes for `PlayerStats`, `Equipment`, and `CombatService`

### 2. Open/Closed Principle (OCP)
**Software entities should be open for extension but closed for modification.**

- Classes should be extendable without modifying existing code
- Use inheritance, interfaces, and abstract classes

### 3. Liskov Substitution Principle (LSP)
**Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.**

- **Bad Example**: `Bird` interface with `fly()` method, but `Penguin` can't actually fly
- **Better Example**: Separate `FlyingBird` interface for birds that can fly

### 4. Interface Segregation Principle (ISP)
**Clients should not be forced to depend on interfaces they don't use.**

- **Bad Example**: `Worker` interface with `work()`, `eat()`, and `repair()` - forcing `Robot` to implement `eat()`
- **Better Example**: Segregated interfaces (`Workable`, `Eatable`, `Repairable`) - classes implement only what they need

### 5. Dependency Inversion Principle (DIP)
**High-level modules should not depend on low-level modules. Both should depend on abstractions.**

- **Bad Example**: `EmailService` directly depends on `EmailProvider` concrete class
- **Better Example**: Both depend on `NotificationProvider` abstraction - allows easy swapping of implementations

## How to Use These Examples

1. **Study the Bad Implementation**: Understand what violates the principle
2. **Identify the Problem**: Notice why it causes issues (tight coupling, hard to test, inflexible)
3. **Review the Better Implementation**: See how to properly apply the principle
4. **Compare**: Understand the benefits of following SOLID principles

## Key Benefits of SOLID

✓ **Maintainability**: Code is easier to understand and modify
✓ **Testability**: Easier to write unit tests with decoupled components
✓ **Scalability**: New features can be added with minimal changes to existing code
✓ **Flexibility**: Easy to swap implementations without breaking existing code
✓ **Reusability**: Well-designed components are more reusable

## Getting Started

1. Navigate to any principle folder
2. Compare the `Bad/` implementation with the `Better/` implementation
3. Read the comments explaining the violations and solutions
4. Practice refactoring bad examples using SOLID principles

## Resources

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Uncle Bob's Clean Code Blog](https://blog.cleancoder.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Inspiration

This project was inspired by the excellent article:
- [The S.O.L.I.D Principles in Pictures](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898) - A fantastic visual guide to understanding SOLID principles

## Author

**Matheus Barbachan e Silva** ([@barbashaman](https://github.com/barbashaman))