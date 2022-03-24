# GIS TASK

This repository contains code for Count how many mailboxes are within the coverage area by using reactJs and leaflet.



## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
The project take coordinates of mailbox and stop and linepath of manMailBox and return how many mail box can served with covarge area.

## Technologies
-ReactJs
-LeafletJs Map


## Setup
To run this project, install it locally using npm:

```
$ cd ../gis_task
$ npm install
$ npm start

Functions :
First: Create components called LeafletMap that contains a Map container which have :
Marker (Mailbox location)
Circle (Stop of manMail box)
Polyline ( Path of Polyline)



  const CurrentMailboxes = () => {
      if(totalMailbox!=0) return;
    circleRef.current.map((stop, index) => {
        details.mailBox.map((box, index) => {
        if (stop.getLatLng().distanceTo(box) < stop.getRadius()) {
          setTotalMailBox((r) => r + 1);
        }
      });
    });
  };
  
  This functuions return the total number of mailbox can be served with covarge area.
