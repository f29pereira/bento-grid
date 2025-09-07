import styles from "./Grid.module.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import ManageAccounts from "../ManageAccounts/ManageAccounts";
import Schedule from "../Schedule/Schedule";
import SocialMediaSchedule from "../SocialMediaSchedule/SocialMediaSchedule";
import Followers from "../Followers/Followers";
import Audience from "../Audience/Audience";
import Post from "../Post/Post";
import WriteContent from "../WriteContent/WriteContent";

/**
 * Renders grid with card components
 */
export default function Grid() {
  return (
    <div className={styles.grid}>
      <SocialMedia />
      <ManageAccounts />
      <Schedule />
      <SocialMediaSchedule />
      <Followers />
      <Audience />
      <Post />
      <WriteContent />
    </div>
  );
}
