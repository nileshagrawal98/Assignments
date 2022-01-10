import { ExclamationCircleOutlined } from "@ant-design/icons/lib/icons";
import { Button, Input, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useContext, useState } from "react";
import { deleteTodo, editTodo, toggleTodo } from "../Redux/actions";
import { AppContext } from "./AppContextProvider";

export const TodoList = () => {
  const { dispatch, getState } = useContext(AppContext);
  const { Todo } = getState();

  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editInput, setEditInput] = useState('');



  const [selectedTodo, setSelectedTodo] = useState({ title: "", id: "" });
  const showDeleteModal = (item) => {
    setSelectedTodo(item);
    setDeleteModalVisible(true);
  };

  const handleDeleteOk = () => {
    dispatch(deleteTodo(selectedTodo.id));
    setDeleteModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
  };

  const showEditModal = (item) => {
    setSelectedTodo(item);
    setEditInput(item.title);
    setEditModalVisible(true);
  };

  const handleEditOk = () => {
    let payload = {
      id: selectedTodo.id,
      title: editInput
    }
    dispatch(editTodo(payload));
    setEditModalVisible(false);
  };

  const handleEditCancel = () => {
    setEditModalVisible(false);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (record) => {
        return (
          <span onClick={() => dispatch(toggleTodo(record.id))}>
            {record ? (
              <span style={{ color: "green" }}>Done</span>
            ) : (
              <span style={{ color: "coral" }}>Not Done</span>
            )}
          </span>
        );
      }
    },
    {
      title: "Toggle",
      key: "id",
      dataIndex: "id",
      render: (text, record) => (
        <Button onClick={() => dispatch(toggleTodo(record.id))}>Toggle</Button>
      )
    },
    {
      title: "Delete",
      key: "id",
      dataIndex: "id",
      render: (text, record) => (
        <div>
          <Button onClick={() => showDeleteModal(record)}>Delete</Button>
        </div>
      )
    },
    {
      title: "Edit",
      key: "id",
      dataIndex: "id",
      render: (text, record) => (
        <div>
          <Button onClick={() => showEditModal(record)}>Edit</Button>
        </div>
      )
    }
  ];

  return (
    <div>
      <Table dataSource={Todo} columns={columns} rowKey="id" />
      <Modal
        title="Confirm Delete"
        visible={isDeleteModalVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
        okText="Delete"
      >
        <p>{selectedTodo.title}</p>
      </Modal>
      <Modal
        title="Edit"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        okText="Edit"
      >
        <p>{selectedTodo.title}</p>
        <Input placeholder="New Title" value={editInput} onChange={(e) => setEditInput(e.target.value)}/>
      </Modal>
    </div>
  );
};
