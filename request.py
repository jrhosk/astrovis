import os
import binascii
import requests

LOCALHOST = "http://127.0.0.1:8000/tree/"
base_path = os.getcwd()
encoded_path = base_path.encode("utf-8")
bin_path = binascii.hexlify(encoded_path).decode("utf-8")

requested_path = LOCALHOST + bin_path
print(requested_path)

r = requests.get(requested_path)

print(r.json())