1. Go to main folder
2. Digit code .
3. Enter into Frontend folder and digit:
	* npm install
	* npm run dev
4. Enter into Backend_node folder and digit:
	* npm install
	* npm start
5. [ALTERNATIVELY] Enter into Backend_fastapi folder and digit:
	* uvicorn main:app  --reload --host 0.0.0.0 --port 8080
	* If you need to debug Python script, uncomment the last to row in the script
	* If you would like to execute a bash into conatiner: docker exec -it backend bash
6. Build and run DOCKERFILE for backend (go into folder Backend_fastapi):
	* docker build -t image-fastapi .
	* docker run --name backend --rm -d -p 8080:8080  image-fastapi
7. Build and run DOCKERFILE for frontend (go into folder Frontend):
	* docker build -t image-react .
	* docker run --name front --rm -d -p 5173:5173 image-react
