import express from "express";
import AccountController from "./accountController.js";
import DiaryController from "./diaryController.js";
import LoginController from "./loginController.js";

const router = express.Router();

router
  .route("/Account")
  .get(AccountController.apiGetAllAccounts)
  .post(AccountController.apiAddAccount);

router.route("/Account/:id").get(AccountController.apiGetAccountById);

router.route("/Login/").post(LoginController.apiLogin);

router
  .route("/Diary")
  .get(DiaryController.apiGetAllDiaries)
  .post(DiaryController.apiAddDiary);

router
  .route("/Diary/:id")
  .get(DiaryController.apiGetDiaryById)
  .put(DiaryController.apiUpdateDiary)
  .delete(DiaryController.apiDeleteDiary);

export default router;
