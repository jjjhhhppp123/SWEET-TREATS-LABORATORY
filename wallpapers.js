// wallpapers.js - Sweet Treats Laboratory 專屬圖片資料庫
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

// 2. 桌布資料庫
const wallpaperDatabase = [
    { 
        id: "001", 
        tag: {
            category: "sweet",
            styleDesc: { zh: "草莓午茶 / 甜蜜點心", ja: "いちごのお茶会 / 甘いお菓子", en: "Strawberry Tea / Sweet Treats" }
        },
        fileId: "1zpNauxD7N-WmTWLY5KW0Iqh9kH1cBNVE" 
    },
    { 
        id: "002", 
        tag: {
            category: "cute",
            styleDesc: { zh: "軟萌玩偶 / 治癒時光", ja: "ふわふわぬいぐるみ / 癒しの時間", en: "Fluffy Plushies / Healing Time" }
        },
        fileId: "1YqQE5YhWXj1sKP5wr7tLrnH5pDGu80Hu" 
    },
    { 
        id: "003", 
        tag: {
            category: "pastel",
            styleDesc: { zh: "粉彩天空 / 雲朵漂浮", ja: "パステルの空 / 浮かぶ雲", en: "Pastel Sky / Floating Clouds" }
        },
        fileId: "1_USchjy_Vbfi94a6lAZexr2aZMftt5Ma" 
    },
    { 
        id: "004", 
        tag: {
            category: "room",
            styleDesc: { zh: "少女臥室 / 溫馨角落", ja: "少女の寝室 / 温かいコーナー", en: "Girl's Bedroom / Cozy Corner" }
        },
        fileId: "1OjKUy95t-wKV3CHJEYKhnMpsppHvDiVl" 
    }
];