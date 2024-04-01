"use strict";
/*  JavaScript 7th Edition
    Chapter 10
   

    Driving Directions
    Author: Jaelin Anderson
    Date:   3/31/24

   
*/

function showMap() {
  
    let driveMap = document.getElementById("driveMap");
    let driveDirections = document.getElementById("driveDirections");
    let startingCity = document.getElementById("startingPoint");
    let endingCity = document.getElementById("endingPoint");
 
    let driveFind = new google.maps.DirectionsService();
    let driveDraw = new google.maps.DirectionsRenderer();
    let city = new google.maps.LatLng(34.084050, -84.669886);
    let myMap = new google.maps.Map(driveMap, {
       zoom: 12,
       center: city
    });
 
    startingCity.addEventListener("change", drawRoute);
    endingCity.addEventListener("change", drawRoute);
 
    function drawRoute() {
       if (startingCity.selectedIndex !== 0 && endingCity.selectedIndex !== 0) {
          let driveRoute = {
             origin: startingCity.value,
             destination: endingCity.value,
             travelMode: 'DRIVING'
          };
 
          driveFind.route(driveRoute, function(response, status) {
             if (status === 'OK') {
                driveDraw.setDirections(response);
                driveDraw.setMap(myMap);
                driveDraw.setPanel(driveDirections);
             } else {
                driveDirections.textContent = "Directions Unavailable: " + status;
             }
          });
       }
    }
 }


