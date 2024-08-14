# Backend
Welcome to Backend-section of my project! Here you can read more about my decisions for architecture and technologies.
## Clean Architecture
I chose to use Clean Architecture on this project to ensure separation of concerns as the application grows. This will mean more work and complexity compared to simple MVC-pattern but as this project is intented to be somewhat large and complex, I don't want to risk the boundaries between models, controllers and business logic to become blurry - even if it meant easier development experience and faster production. After all, this project is intented to be a learning process.

Clean Architecture means that I can write easily testable, decoupled layers of code and maintain them in the long run as the project grows. It also offers a possibility to swap or add new technologies if the need to arises. This will ensure more iterative development process without having to refractor the entire codebase.
### Domain
Core business logic and entities. Isolated from all external systems.
### Application
Business use cases and services, interacts with the domain and infrastructure layers.
### Infrastructure
Database access and other external dependencies.
### Presentation
Handling API requests, controllers and interaction with the application layer.
## Code-First
Combined with Clean Architecture, Code-First approach lets me focus on development without tight constraints of a fixed database schema. I want to ensure agile development process, for not all technical requirements are yet known. With Code-First approach I have more flexibility and iterative development strategy that lets me evolve the schema along with the code I write, making it easier to adapt if new requirements arise.