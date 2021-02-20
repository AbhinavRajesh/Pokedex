import styles from "../styles/Loading.module.css";
import loading from "../public/loading.png";

const Loading = ({ error }) => {
  return (
    <div className={styles.loading}>
      {error && <p>Wrong route! Redirecting to home page</p>}
      <img src={loading} />
    </div>
  );
};

export default Loading;
