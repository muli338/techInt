from urllib import response
import requests

url = "https://aerodatabox.p.rapidapi.com/flights/%7BsearchBy%7D/KL1395/2020-06-10"

headers = {
    "X-RapidAPI-Key": "f3d52ae5b1msh9e4346671c2244ep105756jsn7609681ec1be",
    "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com"
}

response = requests.request("GET", url, headers= headers)

print(response.text)