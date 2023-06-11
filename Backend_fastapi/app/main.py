from typing import Union
import json
from fastapi import FastAPI, Header
from pydantic import BaseModel
import uvicorn
from random import random
from fastapi.middleware.cors import CORSMiddleware
import os

FILENAME = './app/posts.json'

class Posts(BaseModel):
    author: str
    body: str

# To get the content of post file
def get_posts(filename):
    print(os.listdir())
    with open(filename, 'r') as f:
        data = json.load(f)
    return data

# To append the content of file
def store_posts(filename, data):
    with open(filename, 'w') as f:
        f.write(json.dumps(data, indent=4))


origins = [
    "http://localhost:5173",
    "http://localhost:8080",
]

# To manage the CORS
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/posts")
def read_root():
    data = get_posts(FILENAME)
    return {"Posts": data['posts']}


@app.get("/posts/{post_id}")
def read_item(post_id: int):
    return {"item_id": post_id}

@app.post("/posts")
async def create_item(post: Posts):
    print(type(post))
    data = get_posts(FILENAME)
    print(data)
    diz = post.dict()
    diz['id'] = str(random())
    data['posts'].append(diz)
    store_posts(FILENAME, data)
    return post

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8080)