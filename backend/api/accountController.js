import AccountRepository from "../repository/accountRepository.js";

export default class AccountController {
    static async apiGetAllAccounts(req, res, next) {
        try {
            const accounts = await AccountRepository.getAllAccounts();
            if (accounts) {
                res.json({ accounts: accounts });
                return;
            }
            res.status(404).json();
        } catch (e) {
            res.status(500).json();
        }
    }

    static async apiGetAccountById(req, res, next) {
        try {
            const id = req.params.id;
            const account = await AccountRepository.getAccountById(id);
            if (account) {
                res.json({ account: account });
                return;
            }
            res.status(404).json();
        } catch (e) {
            res.status(500).json();
        }
    }

    static async apiAddAccount(req, res, next) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            const account = await AccountRepository.addAccount(username, password);
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