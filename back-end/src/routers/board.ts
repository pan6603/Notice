import { Router } from "express";

const router = Router();

// 예시: 전체 게시글 조회
router.get("/", (req, res) => {
  res.json({ message: "GET /boards" });
});

// 예시: 게시글 생성
router.post("/", (req, res) => {
  res.json({ message: "POST /boards", body: req.body });
});

export default router;
