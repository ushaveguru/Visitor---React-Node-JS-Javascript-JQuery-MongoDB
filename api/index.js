import express from 'express';
import data from '../src/testData';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import  config from '../config';
var bodyParser = require('body-parser');

let mdb;
MongoClient.connect(config.mongodbUri, (err,db)=>{
   assert.equal(null,err);

    mdb = db;
    console.log(mdb);
});


const router =express.Router();
router.get('/search', (req,res)=>{
    //let search={};


    mdb.collection('loc_search').find({}).toArray(function (err,docs){
       if (err) throw err;

        res.send({search:docs});
    });
});

//Start of fetching DB data for cities

router.get('/Monterey', (req,res)=>{
        //let search={};


        mdb.collection('loc_search').find({City: { $in: [ "Monterey" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/SanFrancisco', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "San Francisco" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/Tahoe', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Tahoe" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/Yosemite', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Yosemite" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/BigSur', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Big Sur" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/Oroville', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Oroville" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/NevadaCounty', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Nevada County" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/SantaCruz', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Santa Cruz" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/LosAngeles', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Los Angeles" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/SanDiego', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "San Diego" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/Crescent', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Crescent" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/StovepipeWells', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Stovepipe Wells" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/Oakland', (req,res)=>{

        mdb.collection('loc_search').find({City: { $in: [ "Oakland" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

//End of fetching DB data for cities


//Start of fetching DB data for types

router.get('/Bridges', (req,res)=>{
        //let search={};
        mdb.collection('type_search').find({typeoflocation: { $in: [ "bridges" ] }}).toArray(function(err,docs){
          if (err) throw err;

            res.send({search:docs});

      });
});

router.get('/Waterfalls', (req,res)=>{
        mdb.collection('type_search').find({typeoflocation: { $in: [ "waterfalls" ] }}).toArray(function (err,docs){
           if (err) throw err;
            res.send({search:docs});
        });
});

router.get('/Lakes', (req,res)=>{
        mdb.collection('type_search').find({typeoflocation: { $in: [ "lakes" ] }}).toArray(function (err,docs){
           if (err) throw err;
            res.send({search:docs});
        });
});

router.get('/AmusementParks', (req,res)=>{
        mdb.collection('type_search').find({typeoflocation: { $in: [ "amusementparks" ] }}).toArray(function (err,docs){
           if (err) throw err;
            res.send({search:docs});
        });
});

router.get('/NationalParks', (req,res)=>{
        mdb.collection('type_search').find({typeoflocation: { $in: [ "nationalparks" ] }}).toArray(function (err,docs){
           if (err) throw err;
            res.send({search:docs});
        });
});

router.get('/Beaches', (req,res)=>{
        mdb.collection('type_search').find({typeoflocation: { $in: [ "beaches" ] }}).toArray(function (err,docs){
           if (err) throw err;
            res.send({search:docs});
        });
});

router.get('/Zoos', (req,res)=>{
        mdb.collection('type_search').find({typeoflocation: { $in: [ "zoos" ] }}).toArray(function (err,docs){
           if (err) throw err;
            res.send({search:docs});
        });
});

//End of fetching DB data for types

router.get('/contests', (req,res)=>{
    res.send({contests:data.contests});
});

router.post('/BridgePreview',(req,res)=>{
  const ParkingAvaliablity = req.body.ParkingAvaliablity;
  const ViewPoints = req.body.ViewPoints;
  const KidFriendly = req.body.KidFriendly;
  const BestTimeToVisit = req.body.BestTimeToVisit;
  const WouldVisitAgain = req.body.WouldVisitAgain;
  const Comments = req.body.Comments;
  console.log( req.body.ParkingAvailability);
  var myobj = {ParkingAvaliablity:ParkingAvaliablity,ViewPoints:ViewPoints,KidFriendly:KidFriendly,BestTimeToVisit:BestTimeToVisit,WouldVisitAgain:WouldVisitAgain,Comments:Comments}
  mdb.collection("loc_new_review").insertOne(myobj, function(err, res) {
   if (err) throw err;
   console.log("1 document inserted");
});
});


router.get('/BridgeReview', (req,res)=>{
        //let search={};


        mdb.collection('loc_new_review').find({}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

export default router;
