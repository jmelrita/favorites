# movie-wep
JS 버전 영화 웹 강의
parcel 번들러 이용
vercel 로 배포

https://movie-wep-jeonghan7411.vercel.app/#/


API KEY 숨기기

npm i -D vercel

script  부분에
"vercel": "vercel dev"   local 환경에서 vercel로 묶어 업로드 된것처럼 만들어서 

vercel 에 우리가 프로젝트 시작하는 명령어를 알려줘야함
"dev": "parcel ./index.html", 이부분

vercel.json 은 만든 후
{"devCommand" : "npm run dev","buildCommand":"npm run build}

< vercel 에서 제공하는 서버리스 함수 내용 작성>
api 폴더 생성  >test.js 

 실제론 movie.js를 보면 됨
node.js 에는 fetch 가 없기 때문에 npm i node-fetch@2  2버전을 설치해서 적용

이후 프로젝트 시작은 npm run vercel   (작은 서버를 만들었다고 생각)

최종 업로드시 폴더와 같이 업로드 되는데 한번더 숨긴다(환경변수 사용) npm i -D dotenv
