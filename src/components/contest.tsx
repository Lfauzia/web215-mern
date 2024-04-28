import React, { useEffect, useState } from "react";
import { addNewNameToContest, deleteProposedName, fetchContest, editProposedName } from "../api-client";
import Header from "./header";

const Contest = ({ initialContest, onContestListClick }) => {
  const [contest, setContest] = useState(initialContest);
  const [editingName, setEditingName] = useState(null);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    // Fetch initial contest data if not already present
    if (!contest.names) {
      fetchContest(contest.id)
        .then((fetchedContest) => {
          setContest(fetchedContest);
        })
        .catch(console.error); // Handle fetch error
    }
  }, [contest.id, contest.names]);

  const handleClickContestList = (event) => {
    //event.preventDefault();
    onContestListClick();
  };

  const handleNewNameSubmit = async (event) => {
    //event.preventDefault();
    const newNameInput = event.target.newName.value;
    
    // Optimistically update UI
    const updatedContest = {
      ...contest,
      names: [...contest.names, { id: Date.now().toString(), name: newNameInput, timestamp: new Date() }]
    };
    setContest(updatedContest);

    try {
      // Call API to add new name
      const updatedContestFromServer = await addNewNameToContest({
        contestId: contest.id,
        newNameValue: newNameInput,
      });
      
      // Update UI with data from server response
      setContest(updatedContestFromServer);
    } catch (error) {
      // Revert UI and show error message
      console.error("Failed to add new name:", error);
      setContest(initialContest); // Revert to initial state or handle differently
    }
  };

  const handleDeleteName = async (proposedNameId) => {
    try {
      const updatedContest = await deleteProposedName({
        contestId: contest.id,
        proposedNameId: proposedNameId,
      });
      setContest(updatedContest);
    } catch (error) {
      console.error("Failed to delete name:", error);
    }
  };

  const handleEditName = (proposedName) => {
    setEditingName(proposedName);
    setEditedName(proposedName.name);
  };

  const handleCancelEdit = () => {
    setEditingName(null);
    setEditedName("");
  };

  const handleSaveEdit = async () => {
    try {
      const updatedContest = await editProposedName({
        contestId: contest.id,
        proposedNameId: editingName.id,
        newName: editedName,
      });
      setContest(updatedContest);
      setEditingName(null);
      setEditedName("");
    } catch (error) {
      console.error("Failed to save edited name:", error);
    }
  };

  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>

        <div className="title">    Names</div>
        <div className="body">
          {contest.names?.length > 0 ? (
            <div className="list">
              {contest.names.map((proposedName) => (
                <div key={proposedName.id} className="item">
                  {editingName === proposedName ? (
                    <div>
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          setEditedName(newValue);
                        }}
                      />
                      <button onClick={handleSaveEdit}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </div>
                  ) : (
                    <div>
                      {proposedName.name}
                      <button onClick={() => handleDeleteName(proposedName.id)}>Delete</button>
                      <button onClick={() => handleEditName(proposedName)}>Edit</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div>No names proposed yet</div>
          )}
        </div>

        <div className="title">Propose a New Name</div>
        <div className="body">
          <form type="submit" id="submit" onSubmit={handleNewNameSubmit}>
            <input
              type="text"
              name="newName"
              placeholder="New Name Here.."
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <a href="/" className="link" onClick={handleClickContestList}>
          Contest List
        </a>
      </div>
    </>
  );
};

export default Contest;
