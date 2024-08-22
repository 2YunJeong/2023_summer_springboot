# 2023_summer_springboot
명언 조회 서비스를 구현한 프로젝트입니다.
---------------
## [개발 환경]
- backend : java (srping boot framework)
- frontend : react.js
- IDE : STS4, visual studio
- DB : PostgreSQL
---------------
## [개발 기간]
- 2023.08.15 ~ 2023.08.25
---------------
## [프로젝트 구성]
+ Backend
    + Controller
        + 클라이언트의 요청(예/명언 조회)을 받음
    + Service
        + Controller로부터 받은 요청 처리
        + {  }Service.java 파일
    + Repository
        + PostgreSQL과 통신
        + 데이터는 Repository -> Service -> Controller 순으로 전달
        + {  }base.java 파일
+ Frontend
    + Component
        + Person, Quote, Quotes 컴포넌트 존재
        + Person
            + 화자의 정보 출력
        + Quote
            + 특정 세기의 명언에 대한 정보 출력
        + Quotes
            + 데이터베이스에 저장되어 있는 모든 명언 출력
    + Router
        + URL과 컴포넌트 간의 매핑 관리
---------------
## [프로젝트 기능]
데이터베이스에 저장되어 있는 명언 조회 가능
인물, 특정 명언, 특정 세기 등과 같이 원하는 특정 정보(명언, 인물)만 조회 가능
