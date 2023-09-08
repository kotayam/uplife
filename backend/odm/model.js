import mongoose from "mongoose";

// diary schema
const diarySchema = new mongoose.Schema({
    title: String,
    diary: String,
    owner: String,
    ownerId: String,
    dateCreated: Date,
    lastEdited: Date
})

// account schema
const accountSchema = new mongoose.Schema({
    username: String,
    password: String
});

// model creation
export const Diary = mongoose.model('diary', diarySchema);
export const Account = mongoose.model('account', accountSchema);