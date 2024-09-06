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

#### `회원 개별 조회`

#### `회원 개별 탈퇴`
