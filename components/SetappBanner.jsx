const SetappBanner = () => {
  return (
    <div className="max-w-6xl px-6 py-16 md:py-24 md:m-auto">
      <setapp-custom-banner
        iconUrl="https://store.setapp.com/app/541/6210/icon-1655480536-62aca0d869d85.png"
        appName="WallCal"
        appId="541"
        vendorId="355"
      ></setapp-custom-banner>
      <script type="text/javascript" src="https://developer.setapp.com/setapp-banner/index.js" async></script>
    </div>
  )
}

export default SetappBanner
