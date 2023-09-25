import React, {useState} from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../config/helper-methods";
import FeedBackModal from "../FeedBackModal/FeedBackModal";

const NavBar = ({ data, logo = false, search = false, feedback = false }) => {
    const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);
	const navigate = useNavigate();

	const toggleFeedBackModal = (value = false) => {
		setIsFeedBackModalOpen(value);
    };
    const onSuccess = () => {
		// show toast
		showToast("Feedback Submitted", "success");
	};

    return (
        <div className={styles.wrapper}>
          <nav className={styles.navbar}>
          <div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
					{logo ? <Logo id={styles.logo} /> : null}
				</div>
           
           {search ? (
					<div className={styles.searchWrapper}>
						<Search
							placeholder="Search a album of your choice"
							data={data}
						/>
					</div>
				) : null}
           
           {feedback ? (
					<div
						className={styles.nav_link}
						onClick={() => toggleFeedBackModal(true)}>
						Feedback
					</div>
				) : null}
           
        </nav>
        <FeedBackModal
				isOpen={isFeedBackModalOpen}
				onSuccess={onSuccess}
				onDismiss={toggleFeedBackModal}
			/>
            </div>
    )
}

export default NavBar;