import os

basepath = os.getcwd()

def step_up(path):
  n_path = path.split("/")
  path_length = len(n_path)-1
  n_path = n_path[:path_length]
  if os.path.exists("/".join(n_path)):
    return "/".join(n_path)
  
  else:
    return path

def step_down(path, new_dir):
  if os.path.exists(path + "/" + new_dir):
    return path + "/" + new_dir

  else:
    return path
  

if __name__ == '__main__':
  print(basepath)
  path = step_up(basepath)

  tree = os.listdir(path)

  for leaf in tree:
    p = path + "/" + leaf
    leaf_type = "directory" if os.path.isdir(p) else "file"

    print("{leaf}: {leaf_type}".format(leaf=leaf, leaf_type=leaf_type))

