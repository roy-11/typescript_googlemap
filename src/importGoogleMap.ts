import dotenv from "dotenv";

// googlemapの読み込み
dotenv.config();
const googlemapScript = document.createElement("script");
googlemapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLEMAP_KEY}`;

// googlemapのscriptタグを追加
const mapDiv = document.getElementById("map");
document.body.insertBefore(googlemapScript, mapDiv.nextSibling);
