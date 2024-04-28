import { FC } from "react";
import styles from "./SidebarItem.module.scss";

export interface SidebarItemProps {
  name: string;
  path: string;
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  return <div className={styles.SidebarItem}>{props.name}</div>;
};

export default SidebarItem;
