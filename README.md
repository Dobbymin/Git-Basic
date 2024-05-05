# Git 초기 세팅 방법

## 1. git Clone

`git clone {레포주소}`

local과 remote 를 연결함과 동시에 remote에 올라가있는 파일들을 clone (복제) 한다.

## 2. git init

```
git init
git remote add origin {레포주소}
```

`git init` 을 입력할 경우 현재 디렉토리 기준으로 git 저장소가 생성된다. 아직 remote와 연결은 안된 상황이기 때문에 추가적으로 remote 와 연결이 필요하다.

`git remote add origin {레포주소}` 를 입력하면 local에서 생성한 git 저장소와 remote의 git 저장소를 연결한다.

`git remote --v` 를 입력하면 잘 연결되었는지 확인할 수 있다.

```
origin  https://github.com/GDSC-KNU/3rd-sp-3-FE.git (fetch)
origin  https://github.com/GDSC-KNU/3rd-sp-3-FE.git (push)
```

위와 같이 뜬다면 성공!

# remote에 파일 올리기

## 1. `git add {파일명}` 또는 `git add .`

- 작업 디렉토리상의 변경내용을 스테이징 영역에 추가
- 다음 commit 을 진행하기 전까지 변경한 파일들을 모아놓기 위해 사용한다.

## 2. `git commit -m "commit message"`

커밋메세지를 입력하여 commit 한다.

## 3. `git push origin {branch-name}`

현재 브랜치에서 변경내용을 remote에 반영한다.

# branch 이동 방법

## 1. checkout

`git checkout -b branch-name {start-point}`

start-point 브랜치를 기준 **(입력 안할경우 현재 브랜치 기준)** 으로 branch-name의 브랜치를 만들고 동시에 그 브랜치로 이동한다.

`git checkout branch-name`

branch-name에 해당하는 브랜치로 이동한다.

## 2. switch

`git switch -c branch-name {start-point}`

start-point 브랜치를 기준 **(입력 안할경우 현재 브랜치 기준)** 으로 branch-name의 브랜치를 만들고 동시에 그 브랜치로 이동한다.

`git switch branch-name`

branch-name에 해당하는 브랜치로 이동한다.

# commit 컨벤션

협업시 팀원들과 회의를 통해 결정할 수 있도록 합니다. 꽤 많은 스타일이 존재합니다.

- `feat` : 새로운 기능 추가
- `fix` : 버그 수정
- `docs` : 문서 수정
- `chore` : 사진 추가, 라이브러리 설치 등 코드 이외에 변경점 추가
- `remove` : 파일 삭제 (잘 사용 안함)

### 예시

```
git commit -m "feat: LoginButton 기능 구현"
git commit -m "fix: Login 관련 api 연결 수정"
git commit -m "docs: readme 수정"
git commit -m "chore: .gitkeep 파일 삭제"
```
