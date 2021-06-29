module.exports = {
  HTML:function(mainBody) {
    return `
    <!DOCTYPE HTML>
    <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>군무원 합격 도우미</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="public/style/style.css">

        <script	src="https://kit.fontawesome.com/2d323a629b.js"
        crossorigin="anonymous">
        </script>

        <script>
            function showairforce(){
          document.querySelector('.hrf_airforce').style.color = "white";
          document.querySelector('.hrf_army').style.color = "black";
          document.querySelector('.hrf_navy').style.color = "black";
          document.querySelector('.hrf_military').style.color = "black";

          document.querySelector('.airforce').style.background = "#002f6c";
          document.querySelector('.army').style.background = "white";
          document.querySelector('.navy').style.background = "white";
          document.querySelector('.military').style.background = "white";

          document.querySelector('.table_1').style.display = "none";
          document.querySelector('.table_2').style.display = "table";
          document.querySelector('.table_3').style.display = "none";
          document.querySelector('.table_4').style.display = "none";
        }

            function showarmy(){
          document.querySelector('.hrf_airforce').style.color = "black";
          document.querySelector('.hrf_army').style.color = "white";
          document.querySelector('.hrf_navy').style.color = "black";
          document.querySelector('.hrf_military').style.color = "black";

          document.querySelector('.airforce').style.background = "white";
          document.querySelector('.army').style.background = "#002f6c";
          document.querySelector('.navy').style.background = "white";
          document.querySelector('.military').style.background = "white";

          document.querySelector('.table_1').style.display = "none";
          document.querySelector('.table_2').style.display = "none";
          document.querySelector('.table_3').style.display = "table";
          document.querySelector('.table_4').style.display = "none";
        }

        function shownavy(){
          document.querySelector('.hrf_airforce').style.color = "black";
          document.querySelector('.hrf_army').style.color = "black";
          document.querySelector('.hrf_navy').style.color = "white";
          document.querySelector('.hrf_military').style.color = "black";

          document.querySelector('.airforce').style.background = "white";
          document.querySelector('.army').style.background = "white";
          document.querySelector('.navy').style.background = "#002f6c";
          document.querySelector('.military').style.background = "white";

          document.querySelector('.table_1').style.display = "table";
          document.querySelector('.table_2').style.display = "none";
          document.querySelector('.table_3').style.display = "none";
          document.querySelector('.table_4').style.display = "none";
        }

        function showmilitary(){
          document.querySelector('.hrf_airforce').style.color = "black";
          document.querySelector('.hrf_army').style.color = "black";
          document.querySelector('.hrf_navy').style.color = "black";
          document.querySelector('.hrf_military').style.color = "white";

          document.querySelector('.airforce').style.background = "white";
          document.querySelector('.army').style.background = "white";
          document.querySelector('.navy').style.background = "white";
          document.querySelector('.military').style.background = "#002f6c";

          document.querySelector('.table_1').style.display = "none";
          document.querySelector('.table_2').style.display = "none";
          document.querySelector('.table_3').style.display = "none";
          document.querySelector('.table_4').style.display = "table";
        }
                var num = 0;

        function showfooter_ul(){
          num++;
          if(num%2==1)
          document.querySelector('.footer_ul').style.display = "block";
          if(num%2==0)
          document.querySelector('.footer_ul').style.display = "none";
        }
        </script>


      </head>

      <style>
      .fa-arrow-up{
          font-size: 0.7rem;
          text-align: center;
          line-height: 1.7rem;
          color: #f5f5f5;
          margin-left: 1rem;
        }</style>


      <body>

        <header class="header">

          <div class="lo">

          <img class="logo_img_2" src="public/img/logo_img_2.png" alt="로고 이미지 2">

          <div class="logo">
            <i class="fab fa-accusoft"></i>
            <i class="logo_text">군무원 채용 관련 정보 제공 사이트입니다.</i>
          </div>

          </div>



            <div class="compete_border" >
              <u class="logo_t compete" onclick="location.reload()">군무원 합격 도우미</u>
              <hr class="compete_hr_1">
          </div>


          <div class="logo_3">
          <img class="logo_img_3" src="public/img/logo_img_3.png" alt="로고 이미지 3">
            </div>

        </header>
        <div class=content>
        <div class="main">
              ${mainBody}
            </div>

          <div class="sidebar">
            ss


          </div>

          </div>
        <footer>

          <img class="footer_img" src="public/img/logo_img_2.png" alt="푸터 이미지">


          <i class="footer_text">
            Copyright (c) Republic of Korea C.X.R:couri,jayz. All Rights reserved.
          </i>

        <div class="footernav">

        <div class="footer_ul_nav">
          <div class="footer_nav_nav">
            <nav class="footer_nav" onclick="showfooter_ul()">
        <a class="footer_site" href= 'javascript:void(0);'>군 관련사이트</a>
        <i class="fas fa-arrow-up"></i>
        <ul class="footer_ul">
          <li class="footer_military"><a href="
    https://recruit.mnd.go.kr">국방부 홈페이지 공고</a></li>
          <li class="footer_army"><a href="https://www.army.mil.kr/official/content.jsp">육군 홈페이지 공고</a></li>
          <li class="footer_navy"><a href="https://www.navy.mil.kr/Recruit/indexMain.html">해군 홈페이지 공고</a></li>
          <li class="footer_airforce"><a href="https://go.airforce.mil.kr">공군 홈페이지 공고</a></li>
          </ul>
              </nav>
              </div>


          </div>


        </div>


        </footer>


      </body>



    </html>
    `;
  },indexMain:function(){
    
    var indexMain = `            <ul class="menu_background">
    <i class="fas fa-bars"></i>
    
      <ul class="menu_background_1">
      <li class="menu_li"><i class="fas fa-briefcase"></i>
        <a class="menu_list menu_list_1">행정</a></li>

      <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_1" href="/page/1">행정</a></li>

    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_2" href="/page/2">사서</a></li>

    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_3" href="/page/3">군수</a></li>

    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_4" href="/page/4">군사정보</a></li>

    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_5" href="/page/5">기술정보</a></li>

    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_6" href="/page/6">수사</a></li>
  </ul>

    <ul class="menu_background_2">
    <li class="menu_li"><i class="fas fa-briefcase"></i>
      <a class="menu_list menu_list__2">시설</a></li>

    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_7" href="/page/7">토목</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_8" href="/page/8">건축</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_9" href="/page/9">시설</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_10" href="/page/10">환경</a></li>
      </ul>

      <ul class="menu_background_3">
      <li class="menu_li"><i class="fas fa-briefcase"></i>
      <a class="menu_list menu_list__3" >정보통신</a></li>

    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_11" href="/page/11">전기</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_12" href="/page/12">전자</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_13" href="/page/13">통신</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_14" href="/page/14">전산</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_15" href="/page/15">지도</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_16" href="/page/16">영상</a></li>
      </ul>

      <ul class="menu_background_4">
    <li class="menu_li"><i class="fas fa-briefcase"></i>
      <a class="menu_list menu_list__4" >공업</a></li>

    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_17" href="/page/17">일반기계</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_18" href="/page/18">금속</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_19" href="/page/19">용접</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_20" href="/page/20">물리분석</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_21" href="/page/21">화학분석</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_22" href="/page/22">유도무기</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_23" href="/page/23">총포</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_24" href="/page/24">탄약</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_25" href="/page/25">전차</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_26" href="/page/26">차량</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_27" href="/page/27">인쇄</a></li>
    </ul>

    <ul class="menu_background_5">
    <li class="menu_li"><i class="fas fa-briefcase"></i>
      <a class="menu_list menu_list__5" >항공</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_28" href="/page/28">기체</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_29" href="/page/29">항공기관</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_30" href="/page/30">항공보기</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_31" href="/page/31">항공지원</a></li>
    </ul>

    <ul class="menu_background_6">
    <li class="menu_li"><i class="fas fa-briefcase"></i>
      <a class="menu_list menu_list__6" >함정</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_33" href="/page/33">선체</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_34" href="/page/34">선거</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_35" href="/page/35">항해</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_36" href="/page/36">함정기관</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_36" href="/page/36">잠수</a></li>
    </ul>

    <ul class="menu_background_7">
    <li class="menu_li"><i class="fas fa-briefcase"></i>
      <a class="menu_list menu_list__7" >기상</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_37" href="/page/37">기상장비</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_38" href="/page/38">기상예보</a></li>
    </ul>

    <ul class="menu_background_8">
    <li class="menu_li"><i class="fas fa-briefcase"></i>
      <a class="menu_list menu_list__8" >보건</a></li>

    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_39" href="/page/39">약무</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_40" href="/page/40">병리</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_41" href="/page/41">방사선</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_42" href="/page/42">치무</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_43" href="/page/43">재활치료</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_44" href="/page/44">의무기록</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_45" href="/page/45">의공</a></li>
    <li class="menu_li"><i class="fas fa-user-md"></i>
      <a class="menu_list menu_list_46" href="/page/46">영양관리</a></li>
    </ul>
    </ul>


  <table class="main_table">
    <tr class="main_tr">
    <td><a>구분</a></td>
    <td class="military" onclick="showmilitary()"><a class="hrf_military">국방부</a></td>
    <td class="airforce" onclick="showairforce()" ><a class="hrf_airforce">공군</a></td>
    <td class="navy" onclick="shownavy()"><a class="hrf_navy">해군</a></td>
    <td class="army" onclick="showarmy()"><a class="hrf_army">육군</a></td>
    </tr>

  </table>


  <table class="table_1">
    <caption><i>2021 해군 일반군무원 채용(공채:438명(7급:58명,9급:380명)
      ,공채(장애인 구분모집:23명),경채:19명,경채(지역 구분 모집:7명)</i></caption>
    <tr class="tr_1">
    <td class="first_1">구분</td>
    <td>원서 접수</td>
    <td>경채서류 제출</td>
    <td>서류 전형 <br>합격자 발표</td>
    <td>필기 시험</td>
    <td>필기 시험<br>합격자 발표</td>
    <td>면접 시험</td>
    <td class="td_cancel">최종 합격자<br>발표</td>
    </tr>
    <tr>
    <td class="first_1">공채</td>
    <td>2021-05-07<br>~2021-05-12</td>
    <td></td>
    <td></td>
    <td>2021-07-24</td>
    <td>2021-08-20</td>
    <td>2021-09-27<br>~2021-10-07</td>
    <td>2021-10-14</td>
    </tr>
    <tr>
    <td class="first_1">경채</td>
    <td>2021-05-07<br>~2021-05-12</td>
    <td>2021-05-17<br>~2021-05-20</td>
    <td>2021-06-15</td>
    <td>2021-07-24</td>
    <td></td>
    <td>2021-09-27<br>~2021-10-07</td>
    <td>2021-10-14</td>
    </tr>
  </table>


  <table class="table_2">
    <caption><i>2021 공군 일반군무원 채용(공채:323명,공채(장애인 구분모집):40명,경력경쟁채용:14명)</i></caption>
    <tr class="tr_2">
    <td class="first_2">구분</td>
    <td>원서 접수</td>
    <td>경채서류 제출</td>
    <td>서류 전형 <br>합격자 발표</td>
    <td>필기 시험</td>
    <td>필기 시험<br>합격자 발표</td>
    <td>면접 시험</td>
    <td class="td_cancel">최종 합격자<br>발표</td>
    </tr>
    <tr>
    <td class="first_2">공채</td>
    <td>2021-05-07<br>~2021-05-12</td>
    <td></td>
    <td></td>
    <td>2021-07-24</td>
    <td>2021-08-20</td>
    <td>2021-09-27<br>~2021-09-30</td>
    <td>2021-10-07</td>
    </tr>
    <tr>
    <td class="first_2">경채</td>
    <td>2021-05-07<br>~2021-05-12</td>
    <td>2021-05-17<br>~2021-05-20</td>
    <td>2021-06-25</td>
    <td>2021-07-24</td>
    <td></td>
    <td>2021-09-27<br>~2021-09-30</td>
    <td>2021-10-07</td>
    </tr>
  </table>

  <table class="table_3">
    <caption><i>2021 육군 일반군무원 채용(공채:4334명,공채(장애 구분):338명,경채:388명,경채(장애 구분):47명)</i></caption>
    <tr class="tr_3">
    <td class="first_3">구분</td>
    <td>원서 접수</td>
    <td>경채서류 제출</td>
    <td>서류 전형 <br>합격자 발표</td>
    <td>필기 시험</td>
    <td>필기 시험<br>합격자 발표</td>
    <td>면접 시험</td>
    <td class="td_cancel">최종 합격자<br>발표</td>
    </tr>
    <tr>
    <td class="first_3">공채</td>
    <td>2021-05-07<br>~2021-05-12</td>
    <td></td>
    <td></td>
    <td>2021-07-24</td>
    <td>2021-08-20</td>
    <td>2021-09-06<br>~2021-10-07</td>
    <td>2021-10-14</td>
    </tr>
    <tr>
    <td class="first_3">경채</td>
    <td>2021-05-07<br>~2021-05-12</td>
    <td>2021-05-18<br>~2021-05-21</td>
    <td>2021-06-23</td>
    <td>2021-07-24</td>
    <td></td>
    <td>2021-09-06<br>~2021-10-07</td>
    <td>2021-10-14</td>
    </tr>
  </table>

  <table class="table_4">
    <caption><i>2021 국방부 일반군무원 채용(공채:614명,공채,경력경쟁채용:106명)</i></caption>
    <tr class="tr_4">
    <td class="first_4">구분</td>
    <td>원서 접수</td>
    <td>경채서류 제출</td>
    <td>서류 전형 <br>합격자 발표</td>
    <td>필기 시험</td>
    <td>필기 시험<br>합격자 발표</td>
    <td>면접 시험</td>
    <td class="td_cancel">최종 합격자<br>발표</td>
    </tr>
    <tr>
    <td class="first_4">공채</td>
    <td>2021-05-07<br>~2021-05-12</td>
    <td></td>
    <td></td>
    <td>2021-07-24</td>
    <td>2021-08-20</td>
    <td>2021-09-24<br>~2021-10-30</td>
    <td>2021-10-14</td>
    </tr>
    <tr>
    <td class="first_4">경채</td>
    <td>2021-05-07<br>~2021-05-12</td>
    <td>2021-05-18<br>~2021-05-20</td>
    <td>2021-06-25</td>
    <td>2021-07-24</td>
    <td></td>
    <td>2021-09-24<br>~2021-10-30</td>
    <td>2021-10-14</td>
    </tr>
  </table>
  `;
  return indexMain;

  },pageMain:function(jobName, jobDescription, table, openSubject,oldSubject,certificate){
    return `
    <h1>${jobName}</h1>
      <p>${jobDescription}</p>
      <h3>경쟁률</h3>
      ${table}

    
      <h3>공개경쟁채용 필기시험 과목</h3>
      ${openSubject}
      <h3>경력경쟁채용 필기시험 과목</h3>
      ${oldSubject}
      <h3>응시 필수 자격증</h3>
      ${certificate}
      <a>기출문제 하이퍼링크</a>
    `;
  },makeTable:function(dataList){

    var table = `<table border="1">
    <thead>
    <tr align="center" bgcolor="white">
        <th>직렬</th>
        <th>연도</th>
        <th>소속</th>
        <th>채용인원</th>
        <th>지원인원</th>
        <th>경쟁률</th>
        <th>필기 합격선</th>
    </tr>
    </thead>
    <tbody>`;
    var jobCount = 0;
    var yearCount = 0;
    for(var i=0; i< dataList.length; i++){
      var jobLine = 0;
      table = table + `<tr>`;  
      if(jobCount === 0){
        var j=i;
        
        while((j < dataList.length-1) && (dataList[j].job === dataList[j+1].job)){
          jobCount++;
          j++;
        }
        table = table + `<td rowspan = ${jobCount+1}>${dataList[i].job}</td>`;
      }else {
        jobCount--;
      }
      if(yearCount === 0){
        var j=i;
        
        while((j < i+jobCount) && (dataList[j].year === dataList[j+1].year)){
          yearCount++;
          j++;
        }
        table = table + `<td rowspan = ${yearCount+1}>${dataList[i].year}</td>`;
      }else {
        yearCount--;
      }
      
      table = table + `
      <td>${dataList[i].military}</td>
      <td>${dataList[i].pickNum}</td>
      <td>${dataList[i].applyNum}</td>
      <td>${dataList[i].competition}</td>
      <td>${dataList[i].passLine}</td>
      </tr>
      `;
    }
    table = table + `      </tbody>
    </table>`;
    return table;
  },makeDescriptionList:function(list){
    var liList = '';
    for(var i=0; i<list.length; i++){
      liList = liList + `<li>${list[i].Description}</li>`;
    }
    return liList;
  },makeSubjectTable:function(list){
    
    
    var subjectTable = `<table border =1>
    <thead>
        <tr>
            <th>계급</th>
            <th>과목</th>
        </tr>
    </thead>
    <tbody>
    `;
    if(list.length == 0){
      subjectTable = subjectTable + `    <tr>
      <td colspan=2>해당 없음</td>
      </tr>`;
    }
    else{
      for(var i = 0; i<list.length; i++){
        subjectTable = subjectTable + `    <tr>
        <td>${list[i].grade}</td>
        <td>${list[i].subject}</td>
        </tr>`;
      }
    }

    subjectTable = subjectTable + `</tbody>
    </table>`;
    return subjectTable;
  },makeCertificateTable(list){
    var certificateTable = `<table border =1>
    <thead>
        <tr>
            <th>기술사</th>
            <th>기능장</th>
            <th>기사</th>
            <th>산업기사</th>
            <th>기능사</th>
        </tr>
    </thead>
    <tbody>
    `;

    if(list[0].one == '' && list[0].two == '' && list[0].three == '' && list[0].four == '' && list[0].five == ''){
      certificateTable = certificateTable + `<tr>
      <td colspan=5>해당 없음</td>
      </tr>`;
    }
    else{
      for(var i = 0; i<list.length; i++){
        certificateTable = certificateTable + `<tr>
        <td>${list[i].one}</td>
        <td>${list[i].two}</td>
        <td>${list[i].three}</td>
        <td>${list[i].four}</td>
        <td>${list[i].five}</td>
        </tr>`;
      }
    }
    certificateTable = certificateTable + `</tbody>
    </table>`;
    return certificateTable;
  }
}
