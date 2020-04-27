import React from "react";
import styles from "./style.module.scss"
import PropTypes from 'prop-types';


function AvatarView(props) {
    return (
        <div className={styles.avatar}>
            <img src={props.imageSrc} alt="avatar"/>
        </div>
    )
}

AvatarView.propTypes = {
    imageSrc: PropTypes.string
};

export default AvatarView;