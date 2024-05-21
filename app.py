from packages.packages import *

app=Flask(__name__)
api_key='YOUR_API_KEY'
size='600x400'
zoom=12
gmaps=googlemaps.Client(key=api_key)

origin_place=input("Enter origin location: ")
# origin_place=""
# with open('./my_location.txt','r') as f:
#     origin_place=f.readline()
#     origin_place=origin_place.strip()
destination=input("Enter Destination place: ")
origin_place='+'.join(origin_place.split(' '))
destination='+'.join(destination.split(' '))
url=f'https://maps.googleapis.com/maps/api/directions/json?origin={origin_place}&destination={destination}&key={api_key}'
json=""


@app.get("/fetch")
def distance():
    response = requests.get(url)
    data = response.json()
    json=jsonify(data)
    return json,200

@app.get("/distance")
def find_dist():
    response = requests.get(url)
    data = response.json()
    distance = data['routes'][0]['legs'][0]['distance']['text']
    return jsonify({'distance': distance}),201

@app.get("/coords")
def coords():
    response = requests.get(url)
    data = response.json()
    place_o = data['routes'][0]['legs'][0]['start_location']
    place_d = data['routes'][0]['legs'][0]['end_location']
    origin_lat=data['routes'][0]['legs'][0]['start_location']['lat']
    origin_lng=data['routes'][0]['legs'][0]['start_location']['lng']
    dest_lat=data['routes'][0]['legs'][0]['end_location']['lat']
    dest_lng=data['routes'][0]['legs'][0]['end_location']['lng']
    distance = data['routes'][0]['legs'][0]['distance']['text']
    with open('latlng.txt','w') as f:
        f.write(str(str(origin_lat)+'\n'))
        f.write(str(str(origin_lng)+'\n'))
        f.write(str(str(dest_lat)+'\n'))
        f.write(str(str(dest_lng)+'\n'))
        f.write(str(str(distance)+'\n'))
    return jsonify({'origin': place_o,'destination': place_d}),201

if __name__=="__main__":
    app.run()
