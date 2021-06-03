
def file_read(fname):
        with open(fname) as f:
                c_list = f.readlines()
                return c_list

list=file_read('q1.txt')



