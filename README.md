# J.A.T.E - Just Another Text Editor

# Description

J.A.T.E (Just Another Text Editor) is a Progressive Web Application (PWA) that allows users to create and save notes or code snippets. The application works both online and offline, utilizing data persistence with IndexedDB. The app can also be installed directly on the desktop for quick access, providing a reliable experience even without internet connectivity.

# Features 

- Offline Access: Fully functional offline mode with data persistence.

- PWA Installation: Installable as a desktop or mobile application.

- IndexedDB Integration: Stores data using IndexedDB for offline support.

- Service Worker and Cache: Caches resources for enhanced load times and offline functionality.

- Modular Code with Webpack: Bundled with Webpack for optimized performance.

# Installation 

- Clone the repository
  - git clone <repository-url>

- Navigate to the project directory
  - cd TextEditor/Develop

- Install dependencies for both the client and server
  - cd client
  - npm install
  - cd ../server
  - npm install

- Run the build process for the client
  - cd ../client
  - npm run build
 
- Start the server
  - cd ../server
  - npm start

- Open http://localhost:3000 in your browser to access the application

# Usage

- Open the application in your browser by navigating to the local server URL.

- Type notes or code snippets in the text editor.

- To install the PWA, click the "Install" button.

- The app will be available offline and can be accessed directly from the desktop after installation.

# Technologies Used

- JavaScript (Client-Side and Server-Side)

- Node.js and Express.js (Server)

- IndexedDB (Data Persistence)

- Webpack (Module Bundling)

- Workbox (Service Worker and Caching)

- HTML, CSS (Frontend)

- CodeMirror (Text Editor Styling)

# Screenshot

![Screenshot 2024-11-05 7 03 06 PM](https://github.com/user-attachments/assets/d543969c-9273-443e-b962-59e17ad49ab1)

# Links 

- Render Live Link:  https://texteditor-c1od.onrender.com

- GitHub Repo:  https://github.com/PaigeC001/TextEditor
