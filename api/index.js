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
        //.each((err, locsearch)=>{
            //assert.equal(null, err);
            //if(!locsearch){
            //console.log(test);
             //res.send({search:test});
             //return;
            //}
    //search[locsearch.City] = locsearch;
    //});
});

router.get('/contests', (req,res)=>{
    res.send({contests:data.contests});
});
export default router;