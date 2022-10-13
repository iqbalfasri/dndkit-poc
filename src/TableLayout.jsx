import { forwardRef } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styles from "./TableLayout.module.css";

export const TableLayout = forwardRef(({ head, children }, ref) => {
  return (
    <div ref={ref} className={styles.wrapper}>
      {!!head && <div className={styles.head}>{head}</div>}
      <ScrollSyncPane>
        <div className={styles.scrollarea}>{children}</div>
      </ScrollSyncPane>
    </div>
  );
});
