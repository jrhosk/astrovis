import os
import binascii

from typing import Union

from fastapi import FastAPI
from fastapi import Request
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://127.0.0.1:8000/",
    "http://127.0.0.1:8000/tree/"
]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/tree/{base_path}")
async def get_tree(base_path):
    from tree import map_directory_tree

    encoded_base_path = binascii.unhexlify(base_path)
    decoded_base_path = encoded_base_path.decode("utf-8")

    directory_tree = map_directory_tree(base_path=decoded_base_path)

    return directory_tree