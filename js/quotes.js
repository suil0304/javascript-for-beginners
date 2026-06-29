import { HIDDEN_CLASS_NAME } from "./const.js";

/**
 * @typedef {{
 *      quote: string;
 *      author: string;
 *      from?: string;
 * }} Quote
 */

/**
 * 명?언집
 * @type {Quote[]}
 */
const quotes = [
    {
        quote: "흐윽... 흐으...!",
        author: "디아나",
        from: "시즌 2 3챕터 에피소드 15 중"
    },
    {
        quote: "진짜 시리어스한 건가요? 골치 아프고 몇 개월 동안 질질 끄는 그런 건가요?",
        author: "오팔",
        from: "확률 측정: 선악의 퍼센테이지! 중"
    },
    {
        quote: "슈로는... 아니, 우로스는... 모두가 바라는 영웅이 되기 위해서 얼마나 큰 노력을 했을까?",
        author: "교주",
        from: "그을음 끝에 피어나는 빛무리 중"
    },
    {
        quote: "은행을 털자. 5분이면 1억 엔을 벌 수 있어.",
        author: "스나오오카미 시로코",
        from: "Vol.1 대책위원회 편 제 1장, 대책위원회의 기묘한 하루 중"
    },
    {
        quote: "*crys* why...",
        author: "Corrupted Matt",
        from: "FNF CORRUPTION MOD ' EVIL BF SAVES CORRUPTION MATT !! SAVING DAY 1 중"
    },
    {
        quote: "Beep?",
        author: "Boyfriend",
        from: "모든 때"
    },
    {
        quote: "흐윽⋯! 더는 못 참아!",
        author: "에슈르",
        from: "멜트다운 버터 중"
    },
    {
        quote: "점심 차려라, 사제장! 네 찌개에 책임을 느껴라!",
        author: "죠?안",
        from: "누?구를 위하여 기도를 올리나 중"
    },
    {
        quote: "교주님께서 가장 총애하시는 사도를 부르는 호칭은? 마이-볼!",
        author: "죠안",
        from: "깔깔 호호 사제님 유머집 중"
    },
    {
        quote: "설마 자기 왕국의 여왕이 고통받는 모습을 보고만 있지는 않겠지?",
        author: "리뉴아(R41)",
        from: "여왕님의 마음으로 만든 나라 중"
    },
    {
        quote: "왜 시키지도 않은 짓을 몰래 그렇게 한 거야?",
        author: "교주",
        from: "숨을 곳 하나 없을 너를 위해 중"
    },
    {
        quote: "선생님을 죽이고 저도 죽겠어요!!!",
        author: "텐도 케이",
        from: "빡쳤을 때"
    }
]

/**
 * 명언 담는 span
 * @type {HTMLSpanElement}
 */
const quoteContent = document.querySelector("#quote-block > #quote-content");
/**
 * author 담는 span
 * @type {HTMLSpanElement}
 */
const quoteAuthor = document.querySelector("#quote-block > #quote-author");
/**
 * from 담는 span
 * @type {HTMLSpanElement}
 */
const quoteFrom = document.querySelector("#quote-block > #quote-from");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteContent.innerText = todaysQuote.quote;
quoteAuthor.innerText = todaysQuote.author;
if(todaysQuote.from) {
    quoteFrom.innerText = todaysQuote.from;
    quoteFrom.classList.remove(HIDDEN_CLASS_NAME);
}