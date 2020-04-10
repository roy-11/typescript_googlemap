import { CustomMap } from "./CustomMap";
import { User } from "./User";

// カスタム（機能制限）のマップ作成
const customMap = new CustomMap("map");

customMap.addUserMarker(new User());
