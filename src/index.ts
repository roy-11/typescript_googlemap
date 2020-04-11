import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

window.onload = function () {
  // マーカ追加機能と機能制限したカスタムマップ作成
  const customMap = new CustomMap("map");

  // マーカーを追加
  customMap.addMarker(new User());
  customMap.addMarker(new User());
  customMap.addMarker(new User());
  customMap.addMarker(new Company());
};
