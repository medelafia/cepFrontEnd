import os 

commands = ["git add ." , 'git commit -m "update"' , "git push -u origin main"] ; 
for command in commands : 
    os.system(command) 

print("the process done successful")