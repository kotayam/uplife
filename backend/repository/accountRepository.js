import { ObjectId } from "mongodb";
import { Account } from "../odm/model.js";
import bcrypt from "bcrypt";

export default class AccountRepository {
    static async getAllAccounts() {
        try {
            const accounts = await Account.find();
            return accounts;
        } catch (e) {
            console.error(e);
            throw new Error("unable to get all accounts");
        }
    }

    static async getAccountById(id) {
        try {
            return await Account.findOne({ _id: new ObjectId(id) });
        } catch (e) {
            console.error(e);
            throw new Error("unable to find account")
        }
    }

    static async addAccount(username, password) {
        try {
            const acc = await Account.findOne({ username: username });
            if (acc) {
                return;
            }
            const hashedPass = await bcrypt.hash(password, 10);
            const account = {
                username: username,
                password: hashedPass
            };
            return await Account.create(account);
        } catch (e) {
            console.error(e);
            throw new Error("unable to add account");
        }
    }
}