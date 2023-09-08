import LoginRepository from "../repository/loginRepository.js";

export default class LoginController {
    static async apiLogin(req, res, next) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            const account = await LoginRepository.login(username, password);
            if (account) {
                res.json({ account: account });
                return;
            }
            res.status(404).json();
        } catch (e) {
            res.status(500).json();
        }
    }
}