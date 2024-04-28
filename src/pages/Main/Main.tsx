import Sidebar, { SidebarProps } from "../../components/Sidebar";
import styles from "./Main.module.scss";

const Main = () => {
  const sidebarItems: SidebarProps["items"] = [
    { name: "button-1", path: "button-1" },
  ];

  return (
    <div className={styles.Page}>
      <Sidebar items={sidebarItems} />
    </div>
  );
};

export default Main;
