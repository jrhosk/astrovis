import os
import json

def _map_directory_tree(directory_path, directory_object, was_folder, obj):
    files = os.listdir(directory_path)

    #directory_object = directory_object or []

    for file in files:
        if obj["depth"] == 0:
            obj["node"] = "0"
            obj["depth"] = 1

        else:
            obj["node"] = str(obj["depth"])
            obj["depth"] += 1

        file_path = os.path.join(directory_path, file)

        if os.path.isdir(file_path):
            path_split = file.split(os.path.sep)
            directory_name = path_split[-1]
            last = len(directory_object) - 1

            if was_folder:
                directory_object[last]["children"].append({
                    "id": obj["node"],
                    "name": directory_name,
                    "children": []
                })
            else:
                directory_object.append({
                    "id": obj["node"],
                    "name": directory_name,
                    "children": []
                })

            last = len(directory_object) - 1
            directory_object = _map_directory_tree(file_path, directory_object, True, obj)

        else:
            path_split = file.split(os.path.sep)
            file_name = path_split[-1]
            last = len(directory_object) - 1

            if was_folder:
                directory_object[last]["children"].append({
                    "id": obj["node"],
                    "name": file_name
                })
            else:
                directory_object.append({
                    "id": obj["node"],
                    "name": file_name
                })

    return directory_object

def map_directory_tree(base_path):
    path = os.getcwd()
    parent = os.path.basename(path)

    json_object = {
        "id": "root",
        "name": parent,
        "children": []
    }

    obj = {
        "node": "",
        "depth": 0
    }

    _map_directory_tree(base_path, json_object["children"], False, obj)

    return json_object

#result = map_directory_tree(base_path='/users/jhoskins/fornax/Development/astrovis/server')
#import pprint

#pp = pprint.PrettyPrinter(indent=4)
#pp.pprint(result)
