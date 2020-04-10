import dotenv from "dotenv";

// googlemapの読み込み
dotenv.config();
const googlemapScript = document.createElement("script");
googlemapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLEMAP_KEY}`;

// googlemapのscriptタグを追加
const mainScript = document.getElementById("main_script");
document.body.insertBefore(googlemapScript, mainScript);
console.log(document.body);
