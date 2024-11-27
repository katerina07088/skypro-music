import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
    max: number;
    value: number;
    step: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
export default function ProgressBar({ max, value, step, onChange }:ProgressBarProps) {
  return (
    <input
	    className={styles.styledProgressInput} 
	    type="range" 
	    min="0" 
	    max={max} 
	    value={value} 
	    step={step} 
	    onChange={onChange} 
	  />
  );
}