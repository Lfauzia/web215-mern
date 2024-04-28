import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContestList = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/contests`);
  return resp.data.contests;
};

export const fetchContest = async (contestId) => {
  const resp = await axios.get(`${API_SERVER_URL}/contest/${contestId}`);
  return resp.data.contest;
};

export const addNewNameToContest = async ({ contestId, newNameValue }) => {
  const resp = await axios.post(`${API_SERVER_URL}/contest/${contestId}`, {
    newNameValue,
  });
  return resp.data.updatedContest;
};

export const deleteProposedName = async ({ contestId, proposedNameId }) => {
  const resp = await axios.delete(`${API_SERVER_URL}/contest/${contestId}/proposedName/${proposedNameId}`);
  return resp.data.updatedContest;
};

export const editProposedName = async ({ contestId, proposedNameId, newName }) => {
  const resp = await axios.put(`${API_SERVER_URL}/contest/${contestId}/proposedName/${proposedNameId}`, {
    newName,
  });
  return resp.data.updatedName;
};

// Define and export the addContest function
export const addContest = async (contestData) => {
  const resp = await axios.post(`${API_SERVER_URL}/contests`, contestData);
  return resp.data.newContest;
};
