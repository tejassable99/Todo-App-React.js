import React, { useState } from "react";
import { Icon, Modal, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./App.css";

const UserTodo = ({ tasks, handleDelete, handleUpdate,id }) => {
  const [flag, setFlag] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleFlag = () => {
    setFlag(!flag);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleEdit = () => {
    handleUpdate(id, userInput);
    handleFlag();
  };

  const confirmDelete = () => {
    handleDelete(id);
    closeDeleteModal();
  };

  return (
    <div className={`user-todo ${flag ? "read-mode" : "edit-mode"}`}>
      {flag ? (
        tasks
      ) : (
        <input
          type="text"
          placeholder="Update task"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      )}

      <Icon name="edit" color="blue" onClick={handleEdit} />
      <Icon name="trash" color="red" onClick={openDeleteModal} />

      {/* Delete Modal */}
      <Modal open={deleteModalOpen} onClose={closeDeleteModal}>
        <Modal.Header>Confirm Deletion</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this task?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button positive onClick={confirmDelete}>
            Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default UserTodo;