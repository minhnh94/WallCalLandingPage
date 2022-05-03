const AppLogo = () => {
  return (
    <div className="flex items-center">
      <a href="#" className="flex gap-2 items-center">
        <img
          className="cursor-pointer h-12"
          src="/my-assets/app-icon.svg"
          alt="Logo"
        />
        <span className="font-medium text-3xl">WallCal</span>
      </a>
    </div>
  )
}

export default AppLogo;
