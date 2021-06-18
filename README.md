# _What's Around Here?_

#### _This is a webapp that pulls a list of species found in a given area from wildlife sightings posted on the website [iNaturalist.org](https://www.inaturalist.org)._

#### By _**Brian Hensley**_

## Description

iNaturalist is a social network for people to post images and sounds of wildlife to get identifications from the community. This is a React app that calls to the iNaturalist API to help users discover what species have been seen in a specific area.  The user enters GPS coordinates, a distance in km (_x_) and several optional filters and is shown a list of species (of any biological kingdom: plants, animals, fungi, protozoa, etc) seen within _x_ km from the givin coordinates. The idea was to make a naturalist version of a scavenger hunt, so by default the user is shown the least common species seen in the area, this sort can be reversed.

## Setup/Installation Requirements

* The app is hosted on firebase at [inat-app.firebaseapp.com](https://inat-app.firebaseapp.com/)
    
    Or

* clone with the command `git clone https://github.com/brnhensley/inat-app.git`
* from the root folder run the command `npm run start`
* open [localhost:3000](http://localhost:3000/) in your browser

## Using The App

* The app requires GPS coordinates in decimal format, the easiest way to get them is:
    * **Browser**: go to [Google Maps](https://www.google.com/maps) and right click on the map the location you want to search. The coordinates will be shown, click them to copy to clipboard.
    * **Mobile**: using the Google Maps app tap to drop a pin on the map the location you want to search. Tap the pin and swipe up until you see the GPS coordinates, tap them to copy to clipboard.
* Paste the coordinates into the input field.
* Enter a radius distance, in kilometers, from those coordinates to search. If left blank the default is 10 km.
* You can enter an iNaturalist user id or user name (case sensative). If a name is entered the search will only show results that the user has never observed on their iNaturalist account.
* The _Threatened only_ option will only show species that are theatened, either locally or globally.
* The taxon filter will narrow the search results by whichever biological taxons are selected. By defualt all taxon are included.
* The time of year filter will filter the results by sightings of species during the selected months of the year. By defualt all year round is included.
* Search results are listed from rarest to most common, this can be reversed with the button at the top of the results.

## Technologies Used

* Node.js
* Node Project Manager
* React
* Firebase
* iNaturalist API
* JavaScript
* HTML
* CSS

## Known Issues

* When there are more than 500 search results the iNat API only returns the first 500. The way the API orders those results is unclear so rare species may be left out. In the case that you get more than 500 results it's a helpful to narrow the search parameters.

* The API's user name search is case sensative.

## License

GPL, keep information free. © Brian Hensley 2021. 

## Contact Information

brnhensley@gmail.com