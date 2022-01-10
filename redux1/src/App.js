import { PageHeader } from "antd";
import Layout, { Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Title from "antd/lib/skeleton/Title";
import { TodoInput } from "./Components/TodoInput";
import { TodoList } from "./Components/TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header>
        <TodoInput />
      </Header>
      <TodoList />
    </div>
  );
}