# SMS Gateway Client

This project, **SMS Gateway Client**, is an Angular-based configuration tool for managing the SMS Gateway Node application. It provides a user-friendly interface to configure and monitor the SMS gateway.

## Requirements

- **Node.js**: Ensure Node.js is installed to run Angular.
- **Angular CLI**: Install the Angular CLI globally using `npm install -g @angular/cli`.
- **API Endpoint**: Ensure the SMS Gateway Node API is running and accessible.

## Setup

1. Clone the repository and navigate into the project directory.

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. **Environment Configuration**:

   - Create an `environment.ts` file based on `environment.example.ts`. Update the API endpoint and any other necessary environment variables.

4. **Development Mode**:

   - Run the project locally using:
     ```bash
     ng serve
     ```
   - Open [http://localhost:4200](http://localhost:4200) to view the application.

5. **Production Build**:
   - Generate a production build using:
     ```bash
     ng build --prod
     ```
   - The build output will be in the `dist/` directory, ready for deployment.

## Scripts

- `ng serve`: Starts the client application in development mode.
- `ng build --prod`: Builds the application for production deployment.

## License

This project is licensed under the ISC License.
