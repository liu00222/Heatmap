import pandas as pd
import time
import datetime




def get_unix_timestamp(date):
    date_list = date.split('/')
    new_date = date_list[1] + '/' + date_list[0] + '/' + date_list[2]
    return int(time.mktime(datetime.datetime.strptime(new_date, "%d/%m/%Y").timetuple()))


def get_month(date):
    return date.split('/')[0]


def output_index_data(data, length):
    f = open("index_data.txt", "w+")
    
    result = {}
    
    for i in range(length):
        keyword = data['Transaction Type (text)'][i]
        
        if 'Econ' in keyword or 'econ' in keyword:
            timestamp = int(get_unix_timestamp(data['date'][i]))
            
            if timestamp in result.keys():
                result[timestamp] += 1
            else:
                result[timestamp] = 1
            
    keys = list(result.keys())
    
    for i in range(len(keys)):
        key = keys[i]
        if i == len(keys) - 1:
            f.write(str(key) + ',' + str(result.get(key)))
        else:
            f.write(str(key) + ',' + str(result.get(key)) + '\n')
    
    f.close()


def output_charts_data(data, length):
    f = open("charts_data.txt", "w+")
    
    result = {}
    
    for i in range(length):
        keyword = data['Transaction Type (text)'][i]
        
        if 'Econ' in keyword or 'econ' in keyword:
            month = int(get_month(data['date'][i]))
            
            if month in result.keys():
                result[month] += 1
            else:
                result[month] = 1
        
    keys = list(result.keys())
    
    for i in range(len(keys)):
        key = keys[i]
        if i == len(keys) - 1:
            f.write(str(key) + ',' + str(result.get(key)))
        else:
            f.write(str(key) + ',' + str(result.get(key)) + '\n')
    
    f.close()


if __name__ == "__main__":
    pd.options.mode.chained_assignment = None
    
    input_name = "desktracker.csv"
    data = pd.read_csv(input_name)
    
    #output_index_data(data, len(data))
    output_charts_data(data, len(data))