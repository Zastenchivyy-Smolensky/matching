import client from "lib/api/client"
import { Like } from "interfaces/index"

import Cookies from "js-cookie"

// 全てのいいね情報（自分から、相手から両方）を取得
export const getLikes = () => {
  return client.get("likes", { headers: {
    "access-token": Cookies.get("_access_token")as "",
    "client": Cookies.get("_client") as "",
    "uid": Cookies.get("_uid") as ""
  }})
}

// いいねを作成
export const createLike= (data: Like) => {
  return client.post("likes", data)
}