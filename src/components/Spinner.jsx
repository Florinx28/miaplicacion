import { FaSpinner } from 'react-icons/fa';
import styles from "./Spinner.module.css";
export function Spinner() {
    return (
        <div className={styles.spinner}>
            {/* Iconos instalados de npms.js, luego se visita la página de github para hacer la búesqueda (react -icons) */}
            <FaSpinner className={styles.spinning} size={60}/>
        </div>
    )
}
