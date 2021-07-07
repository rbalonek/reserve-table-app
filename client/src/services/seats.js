import api from "./api-config";

export const getAllSeatsAtTable = async (id) => {
  const resp = await api.get(`/tables/${id}/seats/`);
  return resp.data;
};

export const getOneSeatAtTable = async (table_id, seat_id) => {
  const resp = await api.get(`/tables/${table_id}/seats/${seat_id}`);
  return resp.data;
};

//////NO ROUTE YET
export const getAllSeats = async (id) => {
  const resp = await api.get(`/seats`);
  return resp.data;
};

// export const getOneSensei = async (id) => {
//   const resp = await api.get(`/senseis/${id}`);
//   return resp.data;
// };
