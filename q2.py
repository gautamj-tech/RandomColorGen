from datetime import date


def int2date(argdate: int) -> date:
    
    year = int(argdate / 10000)
    month = int((argdate % 10000) / 100)
    day = int(argdate % 100)

    return date(year, month, day)


date1=int2date(20200702)
date2=int2date(20200711)
res=date2-date1
print(res)