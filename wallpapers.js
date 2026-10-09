// wallpapers.js - SWEET TREATS LABORATORY 專屬圖片資料庫
// ==========================================

// 1. 獨立的分類對照表（統一管理所有分類的三語名稱）
const categoryDictionary = {
    sweet: {
        zh: "甜點時光",
        ja: "スイーツタイム",
        en: "Sweet Time"
    },
    cute: {
        zh: "可愛日常",
        ja: "かわいい日常",
        en: "Cute Daily"
    },
    pastel: {
        zh: "粉彩夢境",
        ja: "パステルの夢",
        en: "Pastel Dream"
    },
    room: {
        zh: "溫馨房間",
        ja: "居心地の良い部屋",
        en: "Cozy Room"
    }
};

// 2. 桌布資料庫 (包含原本的 5 張與新增的 5 張，共 10 張)
const wallpaperDatabase = [
    { 
        id: "001", 
        tag: {
            category: "sweet",
            styleDesc: { zh: "夢幻甜點 / 午茶時光", ja: "夢のスイーツ / ティータイム", en: "Dreamy Sweets / Tea Time" }
        },
        fileId: "1hBT4laW0yxGdWkToKA6jw62pMBUQ1TLM" 
    },
    { 
        id: "002", 
        tag: {
            category: "cute",
            styleDesc: { zh: "軟萌日常 / 治癒陪伴", ja: "ふわふわ日常 / 癒しの寄り添い", en: "Fluffy Daily / Healing Companion" }
        },
        fileId: "1jGqKLWg5l3J_xMFmEnzYVVkY2ZOuiPmq" 
    },
    { 
        id: "003", 
        tag: {
            category: "pastel",
            styleDesc: { zh: "粉彩光影 / 溫柔色調", ja: "パステルの光 / 優しい色合い", en: "Pastel Light / Gentle Tones" }
        },
        fileId: "1IgW-5fo62Oj02UWu1cntXKpXEagq5UbY" 
    },
    { 
        id: "004", 
        tag: {
            category: "room",
            styleDesc: { zh: "溫馨角落 / 寧靜空間", ja: "温かいコーナー / 静かな空間", en: "Cozy Corner / Peaceful Space" }
        },
        fileId: "1zHb2oqCcXOuaeqaIOCS65ynxmX20EeHc" 
    },
    { 
        id: "005", 
        tag: {
            category: "sweet",
            styleDesc: { zh: "甜蜜氛圍 / 舒壓放鬆", ja: "甘い雰囲気 / リラックス", en: "Sweet Vibe / Relaxing" }
        },
        fileId: "18A5tEiK93-nTZnINhlkf_sVtKM7Qseqj" 
    },
    // --- 以下為新增的 5 張圖片 ---
    { 
        id: "006", 
        tag: {
            category: "pastel",
            styleDesc: { zh: "特製甜點 / 療癒時光", ja: "特製スイーツ / 癒しタイム", en: "Special Sweets / Healing Time" }
        },
        fileId: "1Rw_veB-7bBXbqvsBwRRTPOpRC7ShP5Vd" 
    },
    { 
        id: "007", 
        tag: {
            category: "cute",
            styleDesc: { zh: "歡樂小萌物 / 快樂時光", ja: "楽しい可愛いもの / ハッピータイム", en: "Joyful Cuties / Happy Time" }
        },
        fileId: "1yOTzBn4LU5LaP1pb8AeamHubZ3T4rgLl" 
    },
    { 
        id: "008", 
        tag: {
            category: "sweet",
            styleDesc: { zh: "夢幻色彩 / 輕柔氛圍", ja: "夢の色 / 柔らかい雰囲気", en: "Dreamy Colors / Soft Vibe" }
        },
        fileId: "1ZT8fR926WwQxrpkICuBiolOM9I_8N3sC" 
    },
    { 
        id: "009", 
        tag: {
            category: "room",
            styleDesc: { zh: "秘密基地 / 個人空間", ja: "秘密の基地 / プライベート空間", en: "Secret Base / Private Space" }
        },
        fileId: "1tn3uTII1H7E5AFTsawq3xSx06lD31R8B" 
    },
    { 
        id: "010", 
        tag: {
            category: "cute",
            styleDesc: { zh: "萌寵派對 / 可愛爆擊", ja: "ペットパーティー / 可愛さ爆発", en: "Pet Party / Cuteness Overload" }
        },
        fileId: "1EjUxTWCH4tjMjmYpHwgEvqOUBGpA_j4U" 
    }
];
