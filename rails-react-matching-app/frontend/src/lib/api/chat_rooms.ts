import client from "lib/api/client"
import Cookies from "js-cookie"

// マッチングしたユーザーとの全てのチャットルーム情報を取得
export const getChatRooms = () => {
  return client.get("chat_rooms", { headers: {
    "access-token": Cookies.get("_access_token") as "",
    "client": Cookies.get("_client") as "",
    "uid": Cookies.get("_uid") as ""
  }})
}

// id指定でチャットルーム情報を個別に取得
export const getChatRoom = (id: number) => {
  return client.get(`chat_rooms/${id}`, { headers: {
    "access-token": Cookies.get("_access_token") as "" ,
    "client": Cookies.get("_client") as "",
    "uid": Cookies.get("_uid") as ""
  }})
}