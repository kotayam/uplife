import { ObjectId } from "mongodb";
import {Diary} from "../odm/model.js";

export default class DiaryRepository {
    static async getAllDiaries() {
        try {
            const diaries = await Diary.find();
            return diaries;
        } catch (e) {
            console.error(e);
            throw new Error("unable to get all diaries");
        }
    }

    static async getDiaryById(id) {
        try {
            return await Diary.findOne({ _id: new ObjectId(id) });
        } catch (e) {
            console.error(e);
            throw new Error("unable to find diary");
        }
    }

    static async addDiary(title, diary, owner, ownerId) {
        try {
            const dir = {
                title: title,
                diary: diary,
                owner: owner,
                ownerId: ownerId,
                dateCreated: new Date(),
                lastEdited: new Date()
            };
            return await Diary.create(dir);
        } catch (e) {
            console.error(e);
            throw new Error("unable to add diary");
        }
    }

    static async updateDiary(id, title, diary) {
        try {
            const dir = await Diary.updateOne(
                { _id: new ObjectId(id) },
                { $set: {
                    title: title,
                    diary: diary,
                    lastEdited: new Date()
                }}
            );
            return dir;
        } catch (e) {
            console.error(e);
            throw new Error("unable to edit diary");
        }
    }

    static async deleteDiary(id) {
        try {
            const diary = await Diary.findOneAndDelete({ _id: new ObjectId(id) });
            if (diary) {
                return diary;
            }
        } catch (e) {
            console.error(e);
            throw new Error("unable to delete diary");
        }
    }
}