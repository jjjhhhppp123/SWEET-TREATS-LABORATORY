// wallpapers.js - SWEET TREATS LABORATORY 專屬圖片資料庫
// ==========================================

// 1. 獨立的分類對照表（統一管理所有分類的三語名稱）
const categoryDictionary = {
    macaron: {
        zh: "🍓 草莓馬卡龍",
        ja: "🍓 いちごのマカロン",
        en: "🍓 Strawberry Macaron"
    },
    marshmallow: {
        zh: "☁️ 棉花糖牛奶冰淇淋",
        ja: "☁️ マシュマロミルクアイス",
        en: "☁️ Marshmallow Milk Ice Cream"
    }
};

// 2. 桌布資料庫 (已更新為你的 10 張圖片)
const wallpaperDatabase = [
    { 
        id: "001", 
        tag: {
            category: "macaron",
            styleDesc: { zh: "草莓馬卡龍 (夢幻甜點)", ja: "いちごのマカロン (夢のスイーツ)", en: "Strawberry Macaron (Dreamy Sweets)" }
        },
        fileId: "1y6sX1ArnU0vNGjKHUy-RuqXxdg5DF4RZ" 
    },
    { 
        id: "002", 
        tag: {
            category: "macaron",
            styleDesc: { zh: "草莓馬卡龍 (軟萌日常)", ja: "いちごのマカロン (ふわふわ日常)", en: "Strawberry Macaron (Fluffy Daily)" }
        },
        fileId: "1OM8cMNhT6gGyvDsWK14XT9EYufBx1FiB" 
    },
    { 
        id: "003", 
        tag: {
            category: "macaron",
            styleDesc: { zh: "草莓馬卡龍 (粉彩光影)", ja: "いちごのマカロン (パステルの光)", en: "Strawberry Macaron (Pastel Light)" }
        },
        fileId: "1gLgKeLcycxS2P2LfBkRCFgt6xIBfJmuy" 
    },
    { 
        id: "004", 
        tag: {
            category: "macaron",
            styleDesc: { zh: "草莓馬卡龍 (溫馨角落)", ja: "いちごのマカロン (温かいコーナー)", en: "Strawberry Macaron (Cozy Corner)" }
        },
        fileId: "1FmMircBSJBM0HkM7yNtu_Hx1a0yuB1_G" 
    },
    { 
        id: "005", 
        tag: {
            category: "macaron",
            styleDesc: { zh: "草莓馬卡龍 (甜蜜氛圍)", ja: "いちごのマカロン (甘い雰囲気)", en: "Strawberry Macaron (Sweet Vibe)" }
        },
        fileId: "1mJuzDgstfp7lRjI4OAXwjHqlloqUyvkR" 
    },
    { 
        id: "006", 
        tag: {
            category: "marshmallow",
            styleDesc: { zh: "棉花糖冰淇淋 (清涼一夏)", ja: "マシュマロアイス (涼しい夏)", en: "Marshmallow Ice Cream (Cool Summer)" }
        },
        fileId: "1mp31ApeU0QpminZ6WuWvXkVorY5qL-H6" 
    },
    { 
        id: "007", 
        tag: {
            category: "marshmallow",
            styleDesc: { zh: "棉花糖冰淇淋 (甜蜜融化)", ja: "マシュマロアイス (甘い溶け心地)", en: "Marshmallow Ice Cream (Sweet Melt)" }
        },
        fileId: "1ZJSa2y5vET5YuYrC_h8Y2io_je6eg0nA" 
    },
    { 
        id: "008", 
        tag: {
            category: "marshmallow",
            styleDesc: { zh: "棉花糖冰淇淋 (柔和色調)", ja: "マシュマロアイス (パステルカラー)", en: "Marshmallow Ice Cream (Pastel Tones)" }
        },
        fileId: "1L6JHzZkLDcpOjmRuH9gA-ffjXiyraQ7G" 
    },
    { 
        id: "009", 
        tag: {
            category: "marshmallow",
            styleDesc: { zh: "棉花糖冰淇淋 (午後時光)", ja: "マシュマロアイス (午後の時間)", en: "Marshmallow Ice Cream (Afternoon Time)" }
        },
        fileId: "19LkLJF8seiRgmHLr5IWAmDyU1L3RWIzH" 
    },
    { 
        id: "010", 
        tag: {
            category: "marshmallow",
            styleDesc: { zh: "棉花糖冰淇淋 (夢幻美味)", ja: "マシュマロアイス (夢のような美味しさ)", en: "Marshmallow Ice Cream (Dreamy Deliciousness)" }
        },
        fileId: "1dCzbBt67g67rt1lle5dMG-eISM8aisf6" 
    }
];
