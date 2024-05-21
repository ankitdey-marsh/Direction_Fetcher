# Direction_Fetcher
A simple, yet fast and effective implementation of __Google Maps API__ to find out the shortest path between two locations. 

# Highlights
1. Simple and Fast and easy to configure-code wriiten.
2. __Google Maps API__ used for implementation.
3. Can be configured to find out shortest path by __Walking__, __Driving__ and __Transit__.
4. Receive __Transport Bus__ details for shortest path by __Transit__.


# Getting Started
1. `$ git clone https://github.com/ankitdey-marsh/Direction_Fetcher.git` - clone this project to your computer.
2. `$ cd Direction_Fetcher` - go inside the project directory.
3. `pip install -r requirements.txt` to install libraries.
4. `Python ./src/main.py` to execute the python file.
5. Enter origin and destination as per desire.
6. To host the html, execute `python -m http.server 5500` to open a __localhost__ on port __5500__.

# Configurations
1. Replace all the `YOUR-API-KEY` with your personal api key. The `app.js` file has __1__ , the `main.py` has __1__ while the `index.html` has __3__ such placeholders to be replaced by the user.
2. `Line 35 of app.js` has the travel mode. This can be replaced by __Walking__ , __Driving__ and __Transit__ as per requirement.

# API Testing
 Since __flask__ was used to develop the structure of the script , softwares like __Postman__ and __Insomnia__ can be used to test this API.

 - `/fetch` : To fetch the basic API.
 - `/distance` : Displays the shortest distance.
 - `/coords`: Fetches the coordinates of origin and destination, while storing them in a `.txt` file.

# About Me
Hello, my name is Ankit. I am an Engineering Student at [Kalinga Institute of Industrial Technology](https://kiit.ac.in/). I enjoy making teeny tiny projects in
my leisure time and this is one of them. Now that my this project is over, I am open-sourcing the project. Hope you like it!

Lastly, I would like to put it out there that I have worked on other projects that you may like. You can check them out at my [Github](https://github.com/ankitdey-marsh/). Give it a whirl and let me know your thoughts.

If you would like to contribute to this project, you can do so by creating a [PR](https://help.github.com/articles/about-pull-requests/) ; and to support my work, you can click on the projects you like and reward a star.

# Socials

- __Ankit Dey(Me)__
    - Twitter : https://twitter.com/marshdit/
    - Instagram : https://instagram.com/anxit_dxy/
    - Github : https://github.com/ankitdey-marsh/



