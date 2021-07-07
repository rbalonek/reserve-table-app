import api from "./api-config";

export const getAllTables = async () => {
  const resp = await api.get(`/tables`);
  return resp.data;
};

export const getOneTable = async (id) => {
  const resp = await api.get(`/tables/${id}`);
  return resp.data;
};

export const getAllTablesWithGuests = async () => {
  const resp = await api.get(`/table/guests`);
  return resp.data;
};
