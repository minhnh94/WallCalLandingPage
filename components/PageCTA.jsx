const PrimaryButton = () => (
  <div className="pt-12">
    <a href="https://apps.apple.com/app/wallcal-wallpaper-calendar/id1581367286" target="_blank"
       className="inline-block px-12 py-4 font-medium text-white rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue hover:opacity-90" rel="noreferrer">
      Download for free
    </a>
  </div>
);

const PageCTA = () => (
  <section className="py-16 md:py-[90px] bg-slate-light px-6 md:px-0">
    <div
      className="max-w-6xl px-6 py-16 text-center md:py-24 md:m-auto bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
      <div className="max-w-xl m-auto">
        <h5 className="text-base font-bold uppercase font-dm-sans text-slate-orange">
          Supports macOS 10.15 (Catalina) and higher
        </h5>
        <h2 className="mt-[18px] font-medium leading-snug text-mobile-h2 md:text-desktop-h2 font-dm-sans">
          Let&#39;s blend your calendar in your desktop wallpaper!
        </h2>
        <p className="font-dm-sans text-slate-body text-desktop-paragraph mt-[14px]">
          Impressive? Just one step away from having your calendar and reminder right on your desktop wallpaper!
        </p>
      </div>
      <PrimaryButton/>
    </div>
  </section>
);

export default PageCTA;
