1. Install Node.js
2. Go to the project folder and Open VS Code with code.
3. Digit the command: npm create vite	 (oppure: npx create-react-app)
4. Enter the in project folder and digit: npm install
5. To run the server: npm run dev	(npm start)
6. To build the Docker file of the FRONTEND:
	* docker build -t image-react .
	* docker run --name front --rm -p 5173:5173 image-react
