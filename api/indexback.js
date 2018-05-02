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
    let search={};
    //let locsearch =[];
    search = mdb.collection('loc_search').find({});
        /*each((err, locsearch)=>{
            assert.equal(null, err);
            console.log(locsearch);
            if(!locsearch){*/
          
            console.log(search);
             res.send({search:JSON.parse(search)});
             
            
    //search[locsearch.City] = locsearch;
   
});

router.get('/contests', (req,res)=>{
    res.send({contests:data.contests});
});
export default router;