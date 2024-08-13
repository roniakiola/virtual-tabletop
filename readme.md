# Virtual Tabletop

Welcome to my virtual tabletop full-stack project!

This project aims to provide a virtual platform for hosting and playing tabletop games in real-time with your friends and family online. It can be used for any tabletop games that can make use of it's tools but the main focus is on RPG-style tabletop games - these RPG-tabletop games usually require extensive set of tools for documentation, storytelling, character creation, rules, campaigns and gameplay, which means that these tools and information can be scattered around many different instances. My vision is to have them all in one place. 

My personal goal with this project is to learn more about the chosen technologies and build something fun to showcase my programming skills.

**NOTE: This is a fresh passion project that is now entering development. Expect progress and improvements to come as I work on it and learn more during the process.**

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Project Setup](#project-setup)

## Features
This is a list of planned features and functionalities split into Core Features (minimal requirements for working application) and Additional Features that will be worked on after the application's core is ready.

**NOTE: Features may change as the project evolves and new necessities and ideas rise up**

### Core Features

- User authentication and authorization
- Real-time interactive game board with multiple user support
  - Real-time interaction with socket.io
  - Campaign and room management
  - File upload for maps, pictures and character tokens
  - Real-time distance measurement tools
  - Caching campaign progress with Redis and saving persistent data into PostgreSQL
- Dice rolling
- Character sheet creation
- Campaign story documentation

### Additional Features

- Advanced campaign management tools:
  - Real-time pinging
  - Automated combat tracker
  - Automated health tracker for units
- Advanced character management tools:
  - Class spesific spell and ability management
  - Character inventory management
- Customizable character tokens
- Streamable background music

## Technologies Used

### Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Redis
- Socket.io

### Frontend

- React
- TypeScript
- Redux Toolkit
- Vite

### Development and Deployment

- Docker
- Docker Compose

### Testing

- Vitest (frontend)
- Jest (backend)

## Getting Started

### Prerequisities

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20 or later)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

### Project Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/roniakiola/virtual-tabletop.git

    cd virtual-tabletop
    ```
2. **Create environment variables**

    Rename the `example.env` file in the root directory to `.env` and modify the variable values into your own, desired values:

    ```plaintext
    # PostgreSQL
    POSTGRES_USER=yourusername
    POSTGRES_PASSWORD=yourpassword
    POSTGRES_DB=yourdatabase
    ```
3. **Build and start Docker containers**

    Use Docker Compose to build and start the containers for development or production. This will create all necessary images and containers to run the application locally.
    
    **Development:**
    ```bash
    docker compose -f docker-compose.dev.yml up --build
    ```
    **Production:**
    ```bash
    docker compose -f docker-compose.prod.yml up --build
    ```
4. **Access the application**

    Check that both frontend and backend are up and running in your browser:
    - Frontend: http://localhost:3000
    - Backend: http://localhost:3001