def count(file):
   with open(file) as f:
       fl = f.read()
       fl.replace(",", " ")
       return len(fl.split(" "))
print(count("q5.txt"))