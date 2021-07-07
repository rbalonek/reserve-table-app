import api from "./api-config";

export const getAllGuests = async () => {
  const resp = await api.get("/guests");
  return resp.data;
};

export const getAllGuestsAtTable = async (table_id, seat_id) => {
  const resp = await api.get(`tables/${table_id}/seats/${seat_id}/guests`);
  return resp.data;
};

export const getOneGuestAtTable = async (table_id, seat_id, guest_id) => {
  const resp = await api.get(
    `tables/${table_id}/seats/${seat_id}/guests/${guest_id}`
  );
  return resp.data;
};

export const putGuest = async (table_id, seat_id, guest_id, formData) => {
  const resp = await api.put(
    `/tables/${table_id}/seats/${seat_id}/guests/${guest_id}`,
    { table_id: formData }
  );
  return resp.data;
};

// export const postGuest = async (seat_id, formData) => {
//   const resp = await api.post(`/tables/1/seats/${seat_id}/guests/`, {
//     guest: formData,
//   });
//   return resp.data;
// };

export const postGuest = async (formData) => {
  const resp = await api.post(`/tables/1/seats/1/guests/`, {
    guest: formData,
  });
  return resp.data;
};

// export const postGuest = async (table_id, seat_id, formData) => {
//   const resp = await api.post(`/tables/${table_id}/seats/${seat_id}/guests/`, {
//     seat_id: formData,
//     table_id: formData,
//   });
//   return resp.data;
// };

export const deleteGuest = async (table_id, seat_id, guest_id) => {
  const resp = await api.delete(
    `/tables/${table_id}/seats/${seat_id}/guests/${guest_id}`
  );
  return resp.data;
};
