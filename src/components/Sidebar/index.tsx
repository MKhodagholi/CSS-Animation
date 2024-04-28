import { FC } from "react";
import styles from "./Sidebar.module.scss";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

export interface SidebarProps {
  items: SidebarItemProps[];
}

const Sidebar: FC<SidebarProps> = (props) => {
  return (
    <div className={styles.Sidebar}>
      {props.items.map((item) => (
        <SidebarItem {...item} />
      ))}
    </div>
  );
};

export default Sidebar;
