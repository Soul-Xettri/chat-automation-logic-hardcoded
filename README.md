<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# chat-automation-logic-hardcoded

<p align="center">
  Welcome to chat-automation-logic-hardcoded, a project designed for testing the integration of socket.io, chatbot logic, and Prisma with Nest.js. This project provides a platform to experiment with socket-based communication and chatbot functionalities.
</p>

## Introduction

`chat-automation-logic-hardcoded` is a backend project created to explore the concepts of socket.io, chatbot logic, and database integration using Prisma and Nest.js. This project aims to provide a foundation for implementing real-time chat applications with a hardcoded chatbot logic for testing purposes.

## Features

- **Socket.io Integration:** Implements real-time communication using socket.io.
- **Chatbot Logic:** Demonstrates a simple chatbot logic for automated responses.
- **Prisma Database:** Integrates Prisma for efficient database interactions.
- **Nest.js Backend:** Leverages the Nest.js framework for a scalable and organized backend.
- **Concept Testing:** Perfect for experimenting with socket.io and chatbot functionalities.
- **Minimalist Design:** Focuses on the core functionalities without unnecessary complexity.

## Getting Started

To set up and test `chat-automation-logic-hardcoded`, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/soul-xettri/chat-automation-logic-hardcoded.git
    cd chat-automation-logic-hardcoded
    ```

2. **Install Dependencies:**
    ```bash
    yarn install
    ```

3. **Database Setup:**
    - Configure your database settings in the `.env` file.
    - Run Prisma migrations:
      ```bash
      npx prisma migrate dev
      ```

4. **Run the Application:**
    ```bash
    # Start the Nest.js backend
    yarn start:server
    ```

5. **Open in Browser:**
    - Access the provided API endpoints for testing socket.io and chatbot logic.

## Database Schema

The project uses Prisma for database interactions. Refer to the `schema.prisma` file to understand the database schema.

## Contributing

Contributions are welcome! If you have suggestions for improvement, find bugs, or want to contribute new features, please submit a pull request or open an issue.

## Chatbot Logic

Explore the hardcoded chatbot logic in the codebase (`src/chatbot-logic`) to understand how automated responses are generated.

## License

This project is licensed under the MIT License.

Feel free to experiment with `chat-automation-logic-hardcoded` and delve into the world of real-time communication and chatbot development! 🤖💬
