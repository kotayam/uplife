import { Account } from "../odm/model.js";
import bcrypt from "bcrypt";

export default class LoginRepository {
    static async login(username, password) {
        try {
            const account = await Account.findOne({ username: username });
            if (account) {
                const validPass = await bcrypt.compare(password, account.password);
                if (validPass) {
                    const acc = {
                        _id: account.id,
                        username: account.username
                    };
                    return acc;
                }
            }
            throw new Error("unable to login");
        } catch (e) {
            console.error(e);
            throw new Error("unable to login")
        }
    }
}