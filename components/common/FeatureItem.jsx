import styles from "./FeatureItem.module.css";

const FeatureItem = ({ icon, text }) => {
  return (
    <div className={ `flex items-center ${ styles.mb_equal_flex_gap_6 }` }>
      <div className="shrink-0 w-12 h-12 p-2 rounded-full bg-slate-blue">
        { icon }
      </div>
      <p className="ml-4 md:max-w-default text-desktop-paragraph text-slate-body">
        { text }
      </p>
    </div>
  )
}

export default FeatureItem;
