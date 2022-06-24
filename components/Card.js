import React from 'react'
import styles from "../styles/Card.module.css"
import { Icon } from '@iconify/react';

const Card = ({projectImg,projectName,projectLink,smallText}) => {
  return (
    <div className={styles.cardContainer}>
        <img src={projectImg} alt="project image"/>
        <div className={styles.projectDetailsContainer}>
            <p className={styles.projectName}>{projectName}<span className={styles.smallText}>{smallText}</span></p>
            <a className={styles.projectLink} href={projectLink} target="_blank">
                Visit
                <Icon className={styles.projectLinkArrow} icon="bi:arrow-down-right" />
            </a>
        </div>
    </div>
  )
}

export default Card