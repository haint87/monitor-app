# import sys 
import requests
# Takes first name and last name via command  
# line arguments and then display them 

# from requests.exceptions import HTTPError

for url in ['https://api.blockcypher.com/v1/ltc/main']:
    try:
        response = requests.get(url)
    # If the response was successful, no Exception will be raised
    #     response.raise_for_status()
    # except HTTPError as http_err:
    #     print(f'HTTP error occurred: {http_err}')  # Python 3.6
    except Exception as err:
        print(f'Other error occurred: {err}')  # Python 3.6
    else:
        print('Success!')
  