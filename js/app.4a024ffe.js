(function(){"use strict";var a={4427:function(a,t,e){var c=e(5130),n=e(6768);function d(a,t,e,c,d,i){const s=(0,n.g2)("index-header"),l=(0,n.g2)("index-main"),o=(0,n.g2)("index-footer");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(s),(0,n.bF)(l),(0,n.bF)(o)],64)}const i={class:"logo-block"},s=["onClick"],l={ref:"nav-menu"};function o(a,t,c,d,o,r){const u=(0,n.g2)("router-link"),v=(0,n.g2)("svg-icon");return(0,n.uX)(),(0,n.CE)("header",null,[(0,n.Lk)("div",i,[(0,n.bF)(u,{to:"/",custom:""},{default:(0,n.k6)((({navigate:a})=>[(0,n.Lk)("h1",{onClick:a,title:"首頁"},"QRACON",8,s)])),_:1}),(0,n.Lk)("button",{type:"button",class:"menu-button",onClick:t[0]||(t[0]=(...a)=>r.onClickMenuBtn&&r.onClickMenuBtn(...a))},[(0,n.bF)(v,{src:e(3631)},null,8,["src"])])]),(0,n.Lk)("nav",l,[(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.bF)(u,{to:"/",title:"年會活動"},{default:(0,n.k6)((()=>[(0,n.eW)("年會活動")])),_:1})]),(0,n.Lk)("li",null,[(0,n.bF)(u,{to:"/agenda",title:"議程表"},{default:(0,n.k6)((()=>[(0,n.eW)("議程表")])),_:1})]),(0,n.Lk)("li",null,[(0,n.bF)(u,{to:"/map",title:"會場地圖"},{default:(0,n.k6)((()=>[(0,n.eW)("會場地圖")])),_:1})]),(0,n.Lk)("li",null,[(0,n.bF)(u,{to:"/signup",title:"報名資訊"},{default:(0,n.k6)((()=>[(0,n.eW)("報名資訊")])),_:1})]),(0,n.Lk)("li",null,[(0,n.bF)(u,{to:"/notice",title:"注意事項"},{default:(0,n.k6)((()=>[(0,n.eW)("注意事項")])),_:1})]),(0,n.Lk)("li",null,[(0,n.bF)(u,{to:"/partners",title:"合作夥伴"},{default:(0,n.k6)((()=>[(0,n.eW)("合作夥伴")])),_:1})])])],512)])}const r=["innerHTML"];function u(a,t,e,c,d,i){return(0,n.uX)(),(0,n.CE)("div",{class:"svg-icon",innerHTML:d.posts},null,8,r)}var v=e(4373),m={props:{src:{type:String,default:""}},data(){return{posts:""}},mounted(){this.getSvg()},methods:{async getSvg(){const{data:a}=await v.A.get(this.src);this.posts=a}}},b=e(1241);const p=(0,b.A)(m,[["render",u],["__scopeId","data-v-08420a85"]]);var A=p,g={name:"IndexHeader",components:{SvgIcon:A},methods:{onClickMenuBtn(){const a=this.$refs["nav-menu"];a.classList.toggle("open")}}};const h=(0,b.A)(g,[["render",o],["__scopeId","data-v-6eb75245"]]);var k=h;function w(a,t){const e=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("main",null,[(0,n.bF)(e)])}const C={},I=(0,b.A)(C,[["render",w],["__scopeId","data-v-57306c36"]]);var E=I,y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAA7CAYAAACKePFjAAABJElEQVRYhe3WvUoEMRSG4Tf+IGKzWIqdlyAWNgpaewFiKXolXop3YiHs9hZWgmyhKywuiCjqJ1PYyGxyMhMiwvnaE/JkTmYmCWRG0gFwDOwBW8CicYZHsyRpW9JQPWKFziS994FkwSSd9kV+Et2zpnXANbBs7nckKWwI7JSAmixEoMOSUBQDTkpCKWy/NNa6Z5JWgNfUnmbmY2nO+NUO0AtwAYyAz5Z6+x9E0qDDZ3SUWs28Ng6AacZTTUMI66lBsRckJzPL2FKYKY79PyxIugc2K1hXwXSClsltzTY+1cQeamITb2OJ1G/jVyVs3FwLdoGNX4U14DJjoglwHqnPQgg3rZUO14I7y4r8PHPMMcccc8wxxxxzzLE/x96A54x5xskRwDdw3ncnMSS9KwAAAABJRU5ErkJggg==",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAEmUlEQVRoge1bTYhWVRh+3mG0+DRHIUJFLStnYYSNLYxAHZF0k4gxmwohwoULl9q2VS4saCGCCxkMSWhjkCj+LCwLKhEHtNWk6ITMIhS1EbVJ55E3zpff3Dnvvd+953zNvd0emMWcc+5z3ue+53vPe36uICdINgC8BWAdgD4AywA8C2BGXq6C+AvADQC/AhgCcAbAaRG515HeSC4nOUhyjOXDmLNteUzBC0geIjlRQsFJTDhb54eKHiB5u1za2oLaPFBEsJDcUwGBWVAN3jg2pdA1PADgwxzv6jaAO7nfcDH0AJib48lBANtEhKmt2vT0TZJ7SW4g2fMvCW61scf1vdfZkun5LMKBDAKNnrvclFYKkJzlbMqabfy/eRe90wLZOZJLyyI4CbXN2WhBtU2N9m4asHC8TF62oDaSPJGi49CkR11yYs3T56ogugkn3vL8xKQkx2U9PoyVcXiT3E7yFzd8fyT5dqJ+acpvfrDZqJHSaNd0ibNA8mPD1knBywU8y5kNbbDZaHCzbEOc5FySfxr2Xk60baRMdZu73CrLh8MdW/EUxysAZhpPv0TymeY/zvbDRtt13W5p6cPRTlhOcjaAXpd9PQ3gLoARAL9lZlfA7yl1991fK1TDDk/bPjVk1BgO0TIykq+6jPCi0ZfiDslvSG7VpCSF6wfj+f2etj1G21GtHPdU3IokuC9jXrVwg+RHJJ/ycC4ieSHx3FHrZakWTx/jMDq+Fih4hvPwowKiWzFM8nUPfxfJ1STf1ZebYcs1H3F04W54nQ0U3AqN4u8F2OMV3l2U0BIN4FsAr0Wk1Sj+JcmZInIwFmk04Tr8AHyVIVqj7jEA3wO4AuABgOcArACwCUDantkBkldF5LtYBkcZ6i4YpQ3XTzQByeDoJ3k+hUdnoHk57ercb5zkYpL3DK7rJNse+vrzI/l5ivh9ZRK+3+AZLbrIcSPEB51+l0y7cJJzUry9tohoPNnwPGXw7i6D8K0GxxdFRbdwLyP50MM9koPDK7wr1Dh3nOTDZ6HEIqLHRF97qpaQfDmEO4ZwX+Y0LCKXInArjhjlK0NIYwjv9ZT9HIG3iZ+M8unzuObkxvp4NIQ3getG+ZwQ0hgerySChIuInlWPe6oWRnwZi4zyP0JIY3h82FO2KgJvE28Y5ZeN8rYQQ/iQp6xXd10icCveMcovhJDGEH7aKN8ZSqwJDIAtnirdnwvyeKdT1v4Au8qdsiJ7kfJiQeHlXqSgzstSpB/ZsIwbEfK3+qkYEZEXcnaggfI4gI0pzUK2nh4BWJ9368k58XlfRRSP48kO61CKx0LwQUGbOrYs/QcioheA+p1HY0Ezw/dj7rCiE7m6E78ewKcAJgLpdD3+pohYh3/FUbUjpAI2mEdIlTo0zNmveWioUV2j5BrPcxtF5FQMAxLGhBwT5+1rA4CTnqqz3W6R4ROu00t04SJyN3SBkQObjKZDlboKkgdZV0Eqd/mnXWRe/kEFr3tloa3rXqjzBT/U9Uon6nyJF9W9tt0IurbdQlSLi/r/f5rRijp8jJP1Aur1+VVCfP0+uEu8gP/UJ5b1/KgWwGPrLqY8IyOo/gAAAABJRU5ErkJggg==",T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAApCAYAAABk+TodAAACc0lEQVRogeWaO2gUURSGv3+NxlJQKws1IiIWFko2aGNhQCJRBBGxtdDGBwhipYUQELG2SyVI7GK0EAS7QJQItgZfoChqZaEE0V/O7h2JeZHgzuxk9iuXnXvOx2Vnz73niEWw3Q0cAQ4DdWAbsHqxZwrkJ/AKmAAeAvclTS8rvO0u2+dtf/TKIXKNnLvmc5qzo7Z7gHvAnpLs3HKZBE5Iej3zuX9Ebe8GHgMbymyyBL4CByW9yL76V9T2FuApsLGkyS+XL0CvpLfxXI2m5CpgpEKSJJeR5NYUBc6EfXvzyoXe5IZsx9/FG2BT9TwbfAC2xo4OVFiS5DYQooMlSCZvBmup4qk69fiNRtm0puKi07WcJS8BJ4F3OcZYCt21/19jUZ5Liv/nncBV4HvO8RYkb9EGkn5Iug7sAO4WEXM2hYhmSHov6RSwPxXfhVGo6Azh8VS1nAY+FxGzLaI0ZX9LGga2AzfTQTo32iaaIembpMvALuBBZUUzJE1JiirtEPCy1euXRjRD0iPgXKvXLZ2o7djV261etzSitvfafhK3eUBPq9dvu6jtzbbvAM+AA3nFmfdqsAhsrwOuABeAtXmHLFw03WicBa4B64uKW6io7WPAjVQkFEohorbjcH8r1bhtIQ7ezjHwaCrtjrdLMKOjbhhaXm6VkKlaartVnYkQHesA0bHOuamXFG/FoRIklBdD4dhoG6aO03gFG03RBt0n6Vdn9UdpHnjjg/7ULV7phEN/JsnsY1pqhdeLvopsMZONXsuMtv4cUZqyMeTQB1wEPq0gwcg1cu6bPagRLGXO6GiaM4oXVRnnjOK9EnNGowvOGQF/ANjbXVgCo5tSAAAAAElFTkSuQmCC",x="data:image/png;base64,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";const Q=(0,n.Fv)('<h4 data-v-34aa2f72>QRACON<span class="sub" data-v-34aa2f72>第二屆學生量子電腦學會</span></h4><ul class="outer-links" data-v-34aa2f72><li data-v-34aa2f72><a href="https://www.facebook.com/sqcs819/" data-v-34aa2f72><img src="'+y+'" data-v-34aa2f72></a></li><li data-v-34aa2f72><a href="https://www.instagram.com/sqcs.2020" data-v-34aa2f72><img src="'+f+'" data-v-34aa2f72></a></li><li data-v-34aa2f72><a href="https://www.youtube.com/@SQCS" data-v-34aa2f72><img src="'+T+'" data-v-34aa2f72></a></li><li data-v-34aa2f72><a href="#" data-v-34aa2f72><img src="'+x+'" data-v-34aa2f72></a></li></ul>',2),S=[Q];function L(a,t){return(0,n.uX)(),(0,n.CE)("footer",null,S)}const B={},j=(0,b.A)(B,[["render",L],["__scopeId","data-v-34aa2f72"]]);var F=j,J={name:"App",components:{IndexHeader:k,IndexMain:E,IndexFooter:F}};const O=(0,b.A)(J,[["render",d]]);var R=O,X=e(1387),K=e.p+"img/banner.336df18e.jpg",D=e.p+"img/banner-mobile.d47ad78f.jpg",P="data:image/png;base64,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",W=e.p+"img/jumping-cat.486dc72d.png",z=e.p+"img/index-belt.3df51421.png",U=e.p+"img/index-belt-mobile.dfb14d49.jpg",H=e.p+"img/cat-background-1.f53b1451.png",Z=e.p+"img/cat-background-2.128d4b7a.png";const q=(0,n.Fv)('<div class="top-block" data-v-0672b481><img class="normal-banner" src="'+K+'" data-v-0672b481><img class="mobile-banner" src="'+D+'" data-v-0672b481><img class="date-image" src="'+P+'" data-v-0672b481><img class="jumping-cat jumping-cat1" src="'+W+'" data-v-0672b481><img class="jumping-cat jumping-cat2" src="'+W+'" data-v-0672b481></div><div class="belt-block" data-v-0672b481><img class="normal-belt" src="'+z+'" data-v-0672b481><img class="mobile-belt" src="'+U+'" data-v-0672b481></div><div class="cat-background cat-background-1" data-v-0672b481><img src="'+H+'" data-v-0672b481></div><div class="cat-background cat-background-2" data-v-0672b481><img src="'+Z+'" data-v-0672b481></div><div class="middle-block next-era" data-v-0672b481><div class="content" data-v-0672b481><div class="buttons" data-v-0672b481><button data-v-0672b481>支持我們▶</button><button data-v-0672b481>活動報名▶</button></div><article data-v-0672b481><h2 data-v-0672b481>年會主題<br data-v-0672b481>NEXT ERA</h2><p data-v-0672b481> 以下個世代為主軸，在呈現量子力學的開創與前瞻性之餘，也象徵了邁入第二屆的 QRACON 將擁有更為成熟的全新面貌。<br data-v-0672b481> 同時邀請各地的量子力學愛好者一同研討、一同交流、一同共襄盛舉 讓我們都能成為個領域向前一步的關鍵角色。<br data-v-0672b481><br data-v-0672b481></p><h3 data-v-0672b481><mark data-v-0672b481>或許下個世代的創造，就在你我之間發生。</mark></h3></article></div></div><div class="middle-block about-us" data-v-0672b481><div class="content" data-v-0672b481><article data-v-0672b481><h2 data-v-0672b481>關於 QRACON<br data-v-0672b481>about US</h2><p data-v-0672b481> 學生量子電腦年會(Quantum Revolution Assembly CONvention )， 以學生為主自發起的年會活動如今已邁入第二屆，也持續努力促進量子科技的學術界、產業界與教育端的交流與融合。 我們堅信「三人行必有我師焉」，透過這個年會的舞台，學生們可以相互啟發、分享知識，並與學術界和產業界的專業人士互動交流。 這不僅提供學生學習和成長的機會，也促進了不同領域之間的合作和創新。加入我們的年會，一同開啟量子電腦的未來！ </p><ul data-v-0672b481><li data-v-0672b481>Q (Quality) : 高品質演講</li><li data-v-0672b481>R (Recreational) : 寓教於樂的遊戲</li><li data-v-0672b481>A (Advocating) : 推廣量子比賽</li><li data-v-0672b481>C (Competitions) : 促進教育的交流</li><li data-v-0672b481>O (Optimising) : 透過海報和遊戲來促進量子教育</li><li data-v-0672b481>N (Narrowing) : 縮短高中與大學端的隔閡</li></ul></article></div></div>',6);function G(a,t,e,c,n,d){return q}var V={name:"IndexView"};const Y=(0,b.A)(V,[["render",G],["__scopeId","data-v-0672b481"]]);var M=Y,N=e(4232),_=e.p+"img/position-cat-1.8a409d0f.png",$=e.p+"img/position-cat-2.55334ec8.png",aa=e.p+"img/position-cat-3.552bc2fb.png",ta=e.p+"img/agenda-image1.84ef5009.jpg",ea=e.p+"img/agenda-image2.be3d57c3.jpg",ca=e.p+"img/agenda-image3.2ebfbf37.jpg";const na=a=>((0,n.Qi)("data-v-b11a0272"),a=a(),(0,n.jt)(),a),da=na((()=>(0,n.Lk)("div",{class:"banner-block"},[(0,n.Lk)("img",{class:"normal-banner",src:K}),(0,n.Lk)("img",{class:"mobile-banner",src:D})],-1))),ia={class:"content-block"},sa={class:"content"},la=na((()=>(0,n.Lk)("h2",null,"活動議程表",-1))),oa={class:"schedule-container"},ra=["src"],ua={key:1},va=na((()=>(0,n.Lk)("span",null,"-",-1))),ma={key:2},ba={key:3},pa=na((()=>(0,n.Lk)("br",null,null,-1))),Aa={class:"position-container"},ga=["src"],ha={key:1},ka=na((()=>(0,n.Lk)("span",null,"-",-1))),wa={key:2},Ca={key:3},Ia=na((()=>(0,n.Lk)("br",null,null,-1))),Ea=(0,n.Fv)('<div class="cat center-top" data-v-b11a0272><img src="'+_+'" data-v-b11a0272></div><div class="cat right-bottom" data-v-b11a0272><img src="'+$+'" data-v-b11a0272></div><div class="cat left-bottom" data-v-b11a0272><img src="'+aa+'" data-v-b11a0272></div>',3),ya=(0,n.Fv)('<h2 data-v-b11a0272>QRACON年會主打內容介紹</h2><div class="article-block article-block-with-image" data-v-b11a0272><img src="'+ta+'" data-v-b11a0272><article data-v-b11a0272><h3 data-v-b11a0272>專家演講</h3><p data-v-b11a0272> 邀請數位專家進行50分鐘的演講，針對自己的領域介紹， 並在每場演講後設置問答環節，讓參與者有機會直接向專家提問，深入探討相關話題。 </p></article></div><div class="article-block" data-v-b11a0272><article data-v-b11a0272><h3 data-v-b11a0272>量子進程展</h3><p data-v-b11a0272> 這是一場專為國高中生設計的展覽，以量子科技的歷史發展為核心， 從古典物理的局限到量子力學的突破，一步步揭示量子世界的奧秘。 展覽包括多個互動展區，每一區都有其獨特主題，如量子計算、量子密碼學及量子化學等， 不僅展示技術的演進和科學家們的貢獻，還配有豐富的教學資料和線上教材， 旨在提高學生們的學習興趣和科技素養。 通過這次展覽，學生們將能更好地理解量子技術如何塑造未來世界，並啟發他們追求科學創新的熱情。 </p></article></div><div class="article-block article-block-with-image" data-v-b11a0272><img src="'+ea+'" data-v-b11a0272><article data-v-b11a0272><h3 data-v-b11a0272>量子研究海報競賽</h3><p data-v-b11a0272> 一到三人一組，共同研究與量子電腦相關之主題，可以做各種與量子電腦有關之研究，越有創意越好， 最終提交A0大小海報一張展示研究成果。在年會當天展出! </p></article></div><div class="article-block" data-v-b11a0272><article data-v-b11a0272><h3 data-v-b11a0272>桌長計畫</h3><p data-v-b11a0272> 邀請數位經驗豐富的研究生、博士生到現場與與會者進行面對面交流討論， 讓與會者可以針對自己感興趣的議題進行提問和探討。 並且同時設立白板區，讓討論後的結果可以在白板上進行分享，抑或隨意寫下對年會參加的感受。 </p></article></div><img class="full-width-image" src="'+ca+'" data-v-b11a0272><div class="article-block" data-v-b11a0272><article data-v-b11a0272><h3 data-v-b11a0272>量子電玩競賽區</h3><p data-v-b11a0272> 將藉由競賽的形式，活動開始時，主辦方將介紹量子遊戲的基本規則和背後的量子理論概念。 參與者將被分組進行一系列的量子遊戲挑戰，每個挑戰都旨在測試他們對量子理論概念的理解和應用能力。 </p></article></div><div class="article-block" data-v-b11a0272><article data-v-b11a0272><h3 data-v-b11a0272>量子學術成果展區</h3><p data-v-b11a0272> 與國家量子研究中心合作，透過展出臺灣量子中心的研究成果，讓與會者了解量子未來出路跟研究方向 。 </p></article></div><div class="article-block" data-v-b11a0272><article data-v-b11a0272><h3 data-v-b11a0272>量子基礎工作坊(入場時訊問報名數量有限)</h3><p data-v-b11a0272> 由前瞻量子教育平台專任講師出擊 ! 向您介紹最新、最淺顯易懂的量子運算學習教材 </p></article></div>',9);function fa(a,t,e,c,d,i){return(0,n.uX)(),(0,n.CE)(n.FK,null,[da,(0,n.Lk)("div",ia,[(0,n.Lk)("div",sa,[la,(0,n.Lk)("div",oa,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(d.scheduleCells,((a,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:(0,N.C4)(["cell",a.class]),style:(0,N.Tr)(i.toGridCellStyle(a.column,a.row))},["image"===a.type?((0,n.uX)(),(0,n.CE)("img",{key:0,src:a.src},null,8,ra)):"time"===a.type?((0,n.uX)(),(0,n.CE)("p",ua,[(0,n.Lk)("span",null,(0,N.v_)(a.startTime),1),va,(0,n.Lk)("span",null,(0,N.v_)(a.endTime),1)])):"header"===a.type?((0,n.uX)(),(0,n.CE)("p",ma,[(0,n.Lk)("span",null,(0,N.v_)(a.code),1),(0,n.Lk)("span",null,(0,N.v_)(a.text),1)])):((0,n.uX)(),(0,n.CE)("p",ba,[(0,n.eW)((0,N.v_)(a.text)+" ",1),a.nextLineText?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[pa,(0,n.eW)(" "+(0,N.v_)(a.nextLineText),1)],64)):(0,n.Q3)("",!0)]))],6)))),128))]),(0,n.Lk)("div",Aa,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(d.positionCells,((a,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:(0,N.C4)(["cell",a.class]),style:(0,N.Tr)(i.toGridCellStyle(a.column,a.row))},["image"===a.type?((0,n.uX)(),(0,n.CE)("img",{key:0,src:a.src},null,8,ga)):"time"===a.type?((0,n.uX)(),(0,n.CE)("p",ha,[(0,n.Lk)("span",null,(0,N.v_)(a.startTime),1),ka,(0,n.Lk)("span",null,(0,N.v_)(a.endTime),1)])):"header"===a.type?((0,n.uX)(),(0,n.CE)("p",wa,[(0,n.Lk)("span",null,(0,N.v_)(a.code),1),(0,n.Lk)("span",null,(0,N.v_)(a.text),1)])):((0,n.uX)(),(0,n.CE)("p",Ca,[(0,n.eW)((0,N.v_)(a.text)+" ",1),a.nextLineText?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[Ia,(0,n.eW)(" "+(0,N.v_)(a.nextLineText),1)],64)):(0,n.Q3)("",!0)]))],6)))),128)),Ea]),ya])])],64)}var Ta={name:"AgendaView",data(){return{scheduleCells:[{type:"header",text:"QRACON",class:"icon",column:1,row:1},{type:"header",code:"A1",text:"報到處區",class:"header",column:2,row:1},{type:"header",code:"Q1",text:"講廳",class:"header",column:3,row:1},{type:"header",code:"Q2",text:"區域",class:"header",column:4,row:1},{type:"header",code:"Q3",text:"講廳",class:"header",column:5,row:1},{type:"header",code:"P1",text:"區域",class:"header",column:6,row:1},{type:"time",startTime:"8:30",endTime:"9:00",class:"time",column:1,row:2},{type:"time",startTime:"9:10",endTime:"10:00",class:"time",column:1,row:3},{type:"time",startTime:"10:10",endTime:"11:00",class:"time",column:1,row:4},{type:"time",startTime:"11:10",endTime:"12:00",class:"time",column:1,row:5},{type:"time",startTime:"12:00",endTime:"13:20",class:"time",column:1,row:6},{type:"time",startTime:"13:30",endTime:"14:20",class:"time",column:1,row:7},{type:"time",startTime:"14:30",endTime:"15:20",class:"time",column:1,row:8},{type:"time",startTime:"15:30",endTime:"16:20",class:"time",column:1,row:9},{type:"time",startTime:"16:30",endTime:"17:00",class:"time",column:1,row:10},{text:"開始報到",class:"subject",column:2,row:2},{text:"用心為您服務",class:"subject",column:2,row:"3 / 10"},{text:"快樂回家",class:"subject",column:2,row:10},{text:"開幕與組織簡介",class:"subject",column:3,row:3},{text:"張慶瑞",nextLineText:"(量子產業)",class:"subject",column:3,row:4},{text:"專家演講",class:"subject",column:3,row:5},{text:"break",class:"subject",column:3,row:6},{text:"鄭原忠",nextLineText:"(量子化學)",class:"subject",column:3,row:7},{text:"專家演講",nextLineText:"(量子光學)",class:"subject",column:3,row:8},{text:"專家演講",nextLineText:"(超導體發展)",class:"subject",column:3,row:9},{text:"開幕總結",class:"subject",column:3,row:10},{type:"image",src:e(1838),class:"image",column:4,row:"3 / 5"},{text:"桌長開講",class:"subject",column:4,row:"5 / 9"},{text:"快樂回家",class:"subject",column:"4 / 7",row:10},{text:"量子主題科普分享",class:"subject",column:5,row:5},{text:"break",class:"subject",column:5,row:6},{text:"量子基礎工作坊",class:"subject",column:5,row:"7 / 9"},{text:"量子科技的新未來論壇",class:"subject",column:5,row:9},{text:"操作遊玩",class:"subject",column:6,row:"3 / 5"},{text:"競賽說明",class:"subject",column:6,row:5},{text:"操作遊玩",class:"subject",column:6,row:"6 / 10"}],positionCells:[{type:"header",text:"QRACON",class:"icon",column:1,row:1},{type:"header",code:"P2",text:"區域",class:"header",column:2,row:1},{type:"header",code:"P3",text:"區域",class:"header",column:3,row:1},{type:"header",code:"P4",text:"區域",class:"header",column:4,row:1},{type:"header",code:"C1",text:"區域",class:"header",column:5,row:1},{type:"header",code:"C2",text:"區域",class:"header",column:6,row:1},{type:"time",startTime:"8:30",endTime:"9:00",class:"time",column:1,row:2},{type:"time",startTime:"9:10",endTime:"10:00",class:"time",column:1,row:3},{type:"time",startTime:"10:10",endTime:"11:00",class:"time",column:1,row:4},{type:"time",startTime:"11:10",endTime:"12:00",class:"time",column:1,row:5},{type:"time",startTime:"12:00",endTime:"13:20",class:"time",column:1,row:6},{type:"time",startTime:"13:30",endTime:"14:20",class:"time",column:1,row:7},{type:"time",startTime:"14:30",endTime:"15:20",class:"time",column:1,row:8},{type:"time",startTime:"15:30",endTime:"16:20",class:"time",column:1,row:9},{type:"time",startTime:"16:30",endTime:"17:00",class:"time",column:1,row:10},{text:"海報競賽/展示",class:"subject",column:2,row:"2 / 10"},{text:"量子進程展",class:"subject",column:3,row:"2 / 10"},{text:"量子成果展示區",class:"subject",column:4,row:"2 / 10"},{text:"合作廠商交流區",class:"subject",column:5,row:"2 / 10"},{text:"茶點用餐區",class:"subject",column:6,row:"2 / 10"},{text:"快樂回家",class:"subject",column:"2 / 7",row:10}]}},methods:{toGridCellStyle(a,t){return{gridColumn:a,gridRow:t}}}};const xa=(0,b.A)(Ta,[["render",fa],["__scopeId","data-v-b11a0272"]]);var Qa=xa,Sa=e.p+"img/signup-banner.7d9d70e3.jpg";const La=(0,n.Fv)('<div class="banner-block" data-v-1815ed8c><img src="'+Sa+'" data-v-1815ed8c></div><div class="cat-background cat-background-1" data-v-1815ed8c><img src="'+H+'" data-v-1815ed8c></div><div class="cat-background cat-background-2" data-v-1815ed8c><img src="'+Z+'" data-v-1815ed8c></div>',3),Ba={class:"article-block"},ja={class:"content"},Fa={class:"button-block"},Ja=(0,n.Fv)("<article data-v-1815ed8c><h2 data-v-1815ed8c>找回初心向前推進</h2><p data-v-1815ed8c> 你是否還記得年幼時，總是充滿好奇心的自己呢? 隨著時間推移，我們都習慣了既定的人情世故，不再對生命保持熱情…但越是如此，我們就更需要有所行動找回初心!<br data-v-1815ed8c> 萬事起頭難! 但是沒有起頭，又怎麼怎麼會有成果。 「好奇心」 是一切科學發展的必要動力，如今身在量子電腦即將爆發革命的時代。 我們「Qracon」團隊鼓勵著任何想了解量子電腦的人，只要對量子理論有興趣，就馬上來投入量子領域吧！ 想像力就是你的超能力，好奇心便是你的原動力! </p><h3 data-v-1815ed8c><mark data-v-1815ed8c>好奇心能夠殺死一隻貓，也能<del data-v-1815ed8c>救活薛丁格的貓</del>成就不一樣的自己!</mark></h3></article><article data-v-1815ed8c><h2 data-v-1815ed8c>在 0 跟 1 之間的量子世代</h2><p data-v-1815ed8c> 在過去，放眼於國內外，少有一場以國高中、大學生為主體的量子大型交流活動而今年，台灣將迎來第二場專屬於普通學生量子年會。 從 0 邁向 1 的成長，也預示著未來量子人才的積極投入與培育，讓社會更認識量子，不再只是聽過量子，而是了解量子電腦！<br data-v-1815ed8c> 我們也期許藉由此次的年會活動，能夠號召與聯合國外各地學生量子自治組織能跟上台灣的腳步，讓量子科技領域的基礎人才，得到爆炸式的成長！ </p><h3 data-v-1815ed8c><mark data-v-1815ed8c>介於 0 跟 1 之間的力量，<br data-v-1815ed8c><br data-v-1815ed8c>即便微小，也充滿著無限的可能性 !</mark></h3></article>",2);function Oa(a,t,e,c,d,i){return(0,n.uX)(),(0,n.CE)(n.FK,null,[La,(0,n.Lk)("div",Ba,[(0,n.Lk)("div",ja,[(0,n.Lk)("div",Fa,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...a)=>i.onClickSignup&&i.onClickSignup(...a)),title:"按下之後將會開啟新視窗到kktix報名頁面"},"活動報名▶")]),Ja])])],64)}var Ra={name:"SignupView",methods:{onClickSignup(){window.open("https://qracon2024y2nd.kktix.cc/events/9df2b2ca-copy-1")}}};const Xa=(0,b.A)(Ra,[["render",Oa],["__scopeId","data-v-1815ed8c"]]);var Ka=Xa;const Da=(0,n.Fv)('<div class="banner-block" data-v-d673689e><img class="normal-banner" src="'+K+'" data-v-d673689e><img class="mobile-banner" src="'+D+'" data-v-d673689e></div><div class="middle-block" data-v-d673689e><div class="content" data-v-d673689e><h2 data-v-d673689e>QRACON年會注意事項</h2><div class="notice-card" data-v-d673689e><article data-v-d673689e><h3 data-v-d673689e>年會行為準則</h3><p data-v-d673689e> 這些行為準則旨在營造一個尊重、合作和學術交流的環境， 讓每位參與者都能充分參與、享受活動，共同創造一個成功而有意義的年會。 </p></article></div><div class="notice-card right" data-v-d673689e><article data-v-d673689e><h3 data-v-d673689e>尊重和禮貌</h3><p data-v-d673689e> 在年會期間，我們尊重每位參與者的觀點和意見。 我們要保持友善、尊重和禮貌的態度，避免言語或行為上的冒犯。 </p></article></div><div class="notice-card" data-v-d673689e><article data-v-d673689e><h3 data-v-d673689e>知識和分享</h3><p data-v-d673689e> 年會是個學術交流的平台，鼓勵參與者積極分享知識、經驗和研究成果。 同時也應該保持開放的態度，願意學習和聆聽他人的觀點。 </p></article></div><div class="notice-card right" data-v-d673689e><article data-v-d673689e><h3 data-v-d673689e>合作與辯論</h3><p data-v-d673689e> 我們鼓勵參與者之間的合作和建設性的辯論。我們應該尊重他人的觀點， 並以理性和事實為基礎進行討論，避免人身攻擊或情緒化的言辭。 </p></article></div><div class="notice-card" data-v-d673689e><article data-v-d673689e><h3 data-v-d673689e>知識產權</h3><p data-v-d673689e> 我們要尊重他人的知識產權和研究成果。 在年會期間，不得未經授權地使用他人的資料、圖片或研究成果。 </p></article></div><div class="notice-card right" data-v-d673689e><article data-v-d673689e><h3 data-v-d673689e>尊重隱私</h3><p data-v-d673689e> 我們應該尊重參與者的隱私權。 不得未經授權地錄製、攝影或公開他人的演講或發言。 </p></article></div><div class="notice-card" data-v-d673689e><article data-v-d673689e><h3 data-v-d673689e>安全第一</h3><p data-v-d673689e> 我們要遵守年會場地的安全規定和指示。 在任何緊急情況下，應該聽從工作人員的指示並保持冷靜。 </p></article></div></div></div>',2);function Pa(a,t,e,c,n,d){return Da}var Wa={name:"NoticeView"};const za=(0,b.A)(Wa,[["render",Pa],["__scopeId","data-v-d673689e"]]);var Ua=za;const Ha=[{path:"/",name:"IndexView",component:M},{path:"/agenda",name:"AgendaView",component:Qa},{path:"/signup",name:"SignupView",component:Ka},{path:"/notice",name:"NoticeView",component:Ua}],Za=(0,X.aE)({history:(0,X.LA)("/"),routes:Ha});var qa=Za;(0,c.Ef)(R).use(qa).mount("#app")},3631:function(a,t,e){a.exports=e.p+"img/hamburger.711116a9.svg"},1838:function(a,t,e){a.exports=e.p+"img/schedule-cat-1.ff595c6d.png"}},t={};function e(c){var n=t[c];if(void 0!==n)return n.exports;var d=t[c]={exports:{}};return a[c].call(d.exports,d,d.exports,e),d.exports}e.m=a,function(){var a=[];e.O=function(t,c,n,d){if(!c){var i=1/0;for(r=0;r<a.length;r++){c=a[r][0],n=a[r][1],d=a[r][2];for(var s=!0,l=0;l<c.length;l++)(!1&d||i>=d)&&Object.keys(e.O).every((function(a){return e.O[a](c[l])}))?c.splice(l--,1):(s=!1,d<i&&(i=d));if(s){a.splice(r--,1);var o=n();void 0!==o&&(t=o)}}return t}d=d||0;for(var r=a.length;r>0&&a[r-1][2]>d;r--)a[r]=a[r-1];a[r]=[c,n,d]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var c in t)e.o(t,c)&&!e.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:t[c]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,c){var n,d,i=c[0],s=c[1],l=c[2],o=0;if(i.some((function(t){return 0!==a[t]}))){for(n in s)e.o(s,n)&&(e.m[n]=s[n]);if(l)var r=l(e)}for(t&&t(c);o<i.length;o++)d=i[o],e.o(a,d)&&a[d]&&a[d][0](),a[d]=0;return e.O(r)},c=self["webpackChunkqracon"]=self["webpackChunkqracon"]||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))}();var c=e.O(void 0,[504],(function(){return e(4427)}));c=e.O(c)})();
//# sourceMappingURL=app.4a024ffe.js.map