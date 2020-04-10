import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

// カスタム（機能制限）のマップ作成
const customMap = new CustomMap("map");

customMap.addMarker(new User());
customMap.addMarker(new User());
customMap.addMarker(new Company());
