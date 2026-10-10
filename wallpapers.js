// wallpapers.js - SWEET TREATS LABORATORY 專屬圖片資料庫
// ==========================================

// 1. 獨立的分類對照表（統一管理所有分類的三語名稱）
const categoryDictionary = {
    strawberry_macaron: {
        zh: "草莓馬卡龍",
        ja: "いちごのマカロン",
        en: "Strawberry Macaron"
    },
    peach_choco_tart: {
        zh: "白桃黑巧克力塔",
        ja: "白桃ダークチョコタルト",
        en: "White Peach Dark Choco Tart"
    },
    marshmallow_milk_ice_cream: {
        zh: "棉花糖牛奶冰淇淋",
        ja: "マシュマロミルクアイス",
        en: "Marshmallow Milk Ice Cream"
    }
};

// 2. 桌布資料庫 
const wallpaperDatabase = [
    // 1~5: 草莓馬卡龍 Strawberry Macaron
    { 
        id: "001", 
        tag: {
            category: "strawberry_macaron",
            styleDesc: { zh: "夢幻甜點 / 午茶時光", ja: "夢のスイーツ / ティータイム", en: "Dreamy Sweets / Tea Time" }
        },
        fileId: "1hBT4laW0yxGdWkToKA6jw62pMBUQ1TLM" 
    },
    { 
        id: "002", 
        tag: {
            category: "strawberry_macaron",
            styleDesc: { zh: "軟萌日常 / 治癒陪伴", ja: "ふわふわ日常 / 癒しの寄り添い", en: "Fluffy Daily / Healing Companion" }
        },
        fileId: "1jGqKLWg5l3J_xMFmEnzYVVkY2ZOuiPmq" 
    },
    { 
        id: "003", 
        tag: {
            category: "strawberry_macaron",
            styleDesc: { zh: "粉彩光影 / 溫柔色調", ja: "パステルの光 / 優しい色合い", en: "Pastel Light / Gentle Tones" }
        },
        fileId: "1IgW-5fo62Oj02UWu1cntXKpXEagq5UbY" 
    },
    { 
        id: "004", 
        tag: {
            category: "strawberry_macaron",
            styleDesc: { zh: "溫馨角落 / 寧靜空間", ja: "温かいコーナー / 静かな空間", en: "Cozy Corner / Peaceful Space" }
        },
        fileId: "1zHb2oqCcXOuaeqaIOCS65ynxmX20EeHc" 
    },
    { 
        id: "005", 
        tag: {
            category: "strawberry_macaron",
            styleDesc: { zh: "甜蜜氛圍 / 舒壓放鬆", ja: "甘い雰囲気 / リラックス", en: "Sweet Vibe / Relaxing" }
        },
        fileId: "18A5tEiK93-nTZnINhlkf_sVtKM7Qseqj" 
    },
    
    // 6~10: 白桃黑巧克力塔 White Peach Dark Choco Tart
    { 
        id: "006", 
        tag: {
            category: "peach_choco_tart",
            styleDesc: { zh: "特製甜點 / 療癒時光", ja: "特製スイーツ / 癒しタイム", en: "Special Sweets / Healing Time" }
        },
        fileId: "1Rw_veB-7bBXbqvsBwRRTPOpRC7ShP5Vd" 
    },
    { 
        id: "007", 
        tag: {
            category: "peach_choco_tart",
            styleDesc: { zh: "歡樂小萌物 / 快樂時光", ja: "楽しい可愛いもの / ハッピータイム", en: "Joyful Cuties / Happy Time" }
        },
        fileId: "1yOTzBn4LU5LaP1pb8AeamHubZ3T4rgLl" 
    },
    { 
        id: "008", 
        tag: {
            category: "peach_choco_tart",
            styleDesc: { zh: "夢幻色彩 / 輕柔氛圍", ja: "夢の色 / 柔らかい雰囲気", en: "Dreamy Colors / Soft Vibe" }
        },
        fileId: "1ZT8fR926WwQxrpkICuBiolOM9I_8N3sC" 
    },
    { 
        id: "009", 
        tag: {
            category: "peach_choco_tart",
            styleDesc: { zh: "秘密基地 / 個人空間", ja: "秘密の基地 / プライベート空間", en: "Secret Base / Private Space" }
        },
        fileId: "1tn3uTII1H7E5AFTsawq3xSx06lD31R8B" 
    },
    { 
        id: "010", 
        tag: {
            category: "peach_choco_tart",
            styleDesc: { zh: "萌寵派對 / 可愛爆擊", ja: "ペットパーティー / 可愛さ爆発", en: "Pet Party / Cuteness Overload" }
        },
        fileId: "1EjUxTWCH4tjMjmYpHwgEvqOUBGpA_j4U" 
    },

    // 11~15: 棉花糖牛奶冰淇淋 Marshmallow Milk Ice Cream
    { 
        id: "011", 
        tag: {
            category: "marshmallow_milk_ice_cream",
            styleDesc: { zh: "雲朵般柔軟 / 清涼夏日", ja: "雲のように柔らかい / 涼しい夏", en: "Cloud-like Softness / Cool Summer" }
        },
        fileId: "1mp31ApeU0QpminZ6WuWvXkVorY5qL-H6" 
    },
    { 
        id: "012", 
        tag: {
            category: "marshmallow_milk_ice_cream",
            styleDesc: { zh: "輕柔奶香 / 療癒甜點", ja: "優しいミルクの香り / 癒しのスイーツ", en: "Gentle Milky Scent / Healing Dessert" }
        },
        fileId: "1ZJSa2y5vET5YuYrC_h8Y2io_je6eg0nA" 
    },
    { 
        id: "013", 
        tag: {
            category: "marshmallow_milk_ice_cream",
            styleDesc: { zh: "融化的甜蜜 / 快樂時光", ja: "とろける甘さ / ハッピータイム", en: "Melting Sweetness / Happy Time" }
        },
        fileId: "1L6JHzZkLDcpOjmRuH9gA-ffjXiyraQ7G" 
    },
    { 
        id: "014", 
        tag: {
            category: "marshmallow_milk_ice_cream",
            styleDesc: { zh: "悠閒午後 / 冰涼享受", ja: "のんびり午後 / 涼しい楽しみ", en: "Leisurely Afternoon / Cool Enjoyment" }
        },
        fileId: "19LkLJF8seiRgmHLr5IWAmDyU1L3RWIzH" 
    },
    { 
        id: "015", 
        tag: {
            category: "marshmallow_milk_ice_cream",
            styleDesc: { zh: "夢幻冰淇淋 / 少女心", ja: "夢のアイスクリーム / 乙女心", en: "Dreamy Ice Cream / Girly Heart" }
        },
        fileId: "1dCzbBt67g67rt1lle5dMG-eISM8aisf6" 
    }
];
