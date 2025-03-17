import styles from './title-bar.module.scss';
import { useEffect, useState, useRef } from 'react'

export default function TitleBar({children}){
    return (<div className={styles.titleBar}>
        {typeof children != 'undefined' && <p>{children}</p>}
    </div>)
}
