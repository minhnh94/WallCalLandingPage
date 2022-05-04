const FeatureItem = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      <div className="flex shrink-0 w-12 h-12 p-2 rounded-full bg-slate-blue">
        { icon }
      </div>
      <p className="ml-4 md:max-w-default text-desktop-paragraph text-slate-body">
        { text }
      </p>
    </div>
  )
}

export default FeatureItem;
