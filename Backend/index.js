const express=require('express');
const mongoose=require('mongoose');
const signin = require('./Controller/signin.jsx')
const cors=require('cors');
const login = require('./Controller/login.jsx');
const post = require('./Controller/post.jsx');
const allPosts = require('./Controller/allPosts.jsx');
const profileEdit = require('./Controller/profileEdit.jsx');
const postDisplay = require('./Controller/postDisplay.jsx');

// import express from 'express';
// import mongoose from 'mongoose';
// import signin from './Controller/signin.jsx';

const app=express();
const PORT=3000

app.use(express.json())
app.use(cors())


app.post("/signin",cors(),signin)
app.post("/login",cors(),login)
app.post("/post",cors(),post)
app.get("/getPost",cors(),allPosts)
app.post("/editPost",cors(),profileEdit)
app.post("/getProfile",cors(),postDisplay)

mongoose.connect("mongodb+srv://harianand2102:12345@hirehivedb.shgatga.mongodb.net/?retryWrites=true&w=majority&appName=HireHiveDB")

app.listen(PORT,()=>{
    console.log(`the app is running at ${PORT}`)
})