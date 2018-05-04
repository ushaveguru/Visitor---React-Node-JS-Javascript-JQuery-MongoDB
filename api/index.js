import express from 'express';
import data from '../src/testData';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import  config from '../config';

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
router.get('/Monterey', (req,res)=>{
        //let search={};


        mdb.collection('loc_search').find({City: { $in: [ "Monterey" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/Bridges', (req,res)=>{
        //let search={};


        mdb.collection('type_search').find({typeoflocation: { $in: [ "bridges" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/sanjose', (req,res)=>{
        //let search={};


        mdb.collection('loc_search').find({City: { $in: [ "San Jose" ] }}).toArray(function (err,docs){
           if (err) throw err;

            res.send({search:docs});
        });
});

router.get('/contests', (req,res)=>{
    res.send({contests:data.contests});
});

export default router;
