  
import glob
import logging
import logging.handlers

LOG_FILENAME = '/home/Desktop/demo/test.log'

my_logger = logging.getLogger('MyLogger')
my_logger.setLevel(logging.DEBUG)

handler = logging.handlers.RotatingFileHandler(
              LOG_FILENAME, maxBytes=20, backupCount=5)

my_logger.addHandler(handler)
for i in range(20):
    my_logger.debug('i = %d' % i)
logfiles = glob.glob('%s*' % LOG_FILENAME)

for filename in logfiles:
    print(filename)