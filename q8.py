import os 
file_number = 0 
file_size = 0 
while True: 
 if file_size < 2e+6: 
   try: 
     file = open('<file_name>%d<extension>'%file_number, 'x') 
   except: 
      pass 
   file = open('<file_name>%d<extension>'%file_number) 
   text = file.read() + '<text_to_be_written>' 
   file = open('<file_name>%d<extension>'%file_number, 'w') 
   file.write(text) 
 file_size = os.stat('<file_name>%d<extension>'%file_number) .st_size 
 if file_size > 2e+6: 
   file_number += 1 
   file_size = 0 