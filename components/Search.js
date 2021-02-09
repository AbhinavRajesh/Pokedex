import { SearchRounded } from "@material-ui/icons";
import styles from "../styles/Search.module.css";

const Search = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input type="text" className={styles.input} {...rest} />
    </div>
  );
};

export default Search;
