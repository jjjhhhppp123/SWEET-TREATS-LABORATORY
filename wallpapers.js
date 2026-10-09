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

// 2. 桌布資料庫 (已更新為新的 5 張圖片連結)
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
    }
];
