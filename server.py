import os
import binascii

from typing import Union

from fastapi import FastAPI
from fastapi import Request

app = FastAPI()

@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/tree/{base_path}")
async def get_tree(base_path):
    encoded_bin_path = base_path.encode("utf-8")
    encoded_base_path = binascii.unhexlify(encoded_bin_path)
    decoded_base_path = encoded_base_path.decode("utf-8")

    return {
      "path": decoded_base_path,
      "tree": os.listdir(decoded_base_path)
      }
    