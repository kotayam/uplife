import DiaryRepository from "../repository/diaryRepository.js";

export default class DiaryController {
    static async apiGetAllDiaries(req, res, next) {
        try {
            const diaries = await DiaryRepository.getAllDiaries();
            if (diaries) {
                res.json({ diaries: diaries });
                return;
            }
            res.status(404).json();
        } catch (e) {
            res.status(500).json();
        }
    }

    static async apiGetDiaryById(req, res, next) {
        try {
            const id = req.params.id;
            const diary = await DiaryRepository.getDiaryById(id);
            if (diary) {
                res.json({ diary: diary });
                return;
            }
            res.status(404).json();
        } catch (e) {
            res.status(500).json();
        }
    }

    static async apiAddDiary(req, res, next) {
        try {
            const title = req.body.title;
            const dir = req.body.diary;
            const owner = req.body.owner;
            const ownerId = req.body.ownerId;
            const diary = await DiaryRepository.addDiary(title, dir, owner, ownerId);
            if (diary) {
                res.json({ diary: diary });
                return;
            }
            res.status(404).json();
        } catch (e) {
            res.status(500).json();
        }
    }

    static async apiUpdateDiary(req, res, next) {
        try {
            const id = req.params.id;
            const title = req.body.title;
            const dir = req.body.diary;
            const diary = await DiaryRepository.updateDiary(id, title, dir);
            if (diary) {
                res.json({ diary: diary });
                return;
            }
            res.status(404).json();
        } catch (e) {
            res.status(500).json();
        }
    }

    static async apiDeleteDiary(req, res, next) {
        try {
            const id = req.params.id;
            const diary = await DiaryRepository.deleteDiary(id);
            if (diary) {
                res.json({ diary: diary });
                return;
            }
            res.status(404).json();
        } catch (e) {
            res.status(500).json();
        }
    }
}