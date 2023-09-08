import os
import json
import binascii
import requests

LOCALHOST = "http://127.0.0.1:8000/tree/"
base_path = os.getcwd()
encoded_path = base_path.encode("utf-8")
bin_path = binascii.hexlify(encoded_path).decode("utf-8")

requested_path = LOCALHOST + bin_path
print(requested_path)

r = requests.get(requested_path)

json_object = r.json()

str_result = json.dumps(json_object, indent=2)
print(str_result)