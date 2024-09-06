const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
    console.log(`User API Project listening on port ${port}`);
});

let db = new Map();
let dbIndex = 1;

// 로그인
app.post('/login', (req, res) => {});

// 회원 가입
app.post('/join', (req, res) => {
    let userData = req.body;
    if (userData.userId && userData.pwd && userData.name) {
        db.set(dbIndex++, userData);

        res.status(201).json({
            message: `${userData.name}님 환영합니다.`,
        });
    } else {
        res.status(400).json({
            message: '올바르지 않은 요청입니다.',
        });
    }
});

// 회원 개별 조회, 회원 개별 탈퇴
app.route('/users/:id')
    .get((req, res) => {
        let { id } = req.params;
        id = parseInt(id);

        const userData = db.get(id);
        if (userData) {
            res.status(201).json({
                userId: userData.userId,
                name: userData.name,
            });
        } else {
            res.status(404).json({
                message: '회원 정보가 없습니다.',
            });
        }
    })
    .delete((req, res) => {
        let { id } = req.params;
        id = parseInt(id);

        const userData = db.get(id);
        if (userData) {
            db.delete(id);

            res.status(201).json({
                message: `${userData.name}님 다음에 또 뵙겠습니다.`,
            });
        } else {
            res.status(404).json({
                message: '회원 정보가 없습니다.',
            });
        }
    });
