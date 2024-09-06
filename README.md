# 4주차 · Part: 05 | 회원 API 설계 프로젝트

### *설계*
- `회원`
    - *로그인* => POST | "/login"
        - `req` : body (id, pwd)
        - `res` : \`${name}님 환영합니다.\` -> main Page
    - *회원 가입* => POST | "/join"
        - `req` : body (userId, pwd, name)
        - `res` : \`${name}님 환영합니다.\` -> login Page
    - *회원 개별 조회* => GET | "/users/:id"
        - `req` : URL (id)
        - `res` : userId, name
    - *회원 개별 탈퇴* => DELETE | "/users/:id"
        - `req` : URL (id)
        - `res` : \`${name}님 다음에 또 뵙겠습니다.\` -> main Page

### *실행 결과*
#### `회원 가입`
<img width="1130" alt="스크린샷 2024-09-06 오후 5 56 03" src="https://github.com/user-attachments/assets/e33a4422-5b81-429c-a29d-793b944a5fca">

#### `회원 개별 조회`
<img width="1130" alt="스크린샷 2024-09-06 오후 5 56 33" src="https://github.com/user-attachments/assets/0fdcbea9-e726-49c4-9382-7020af628cc9">

#### `회원 개별 탈퇴`
<img width="1130" alt="스크린샷 2024-09-06 오후 5 56 43" src="https://github.com/user-attachments/assets/206f1e3f-b87e-4a6b-aaeb-8b375bb00cbb">
