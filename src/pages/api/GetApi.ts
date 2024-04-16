import { fetchDatas } from "./DataMethodApi";

export function getShopTable() {
  return fetchDatas('/shops/{shop_id}/notices/{notice_id}/applications');
}

export function getUserTable() {
  return fetchDatas('/users/{user_id}/applications');
}