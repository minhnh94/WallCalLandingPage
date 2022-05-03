import AppLogo from "./common/AppLogo";

const PageFooter = () => (
  <footer className="bg-slate-light font-dm-sans">
    <div className="py-12 md:py-[90px] mx-6 max-w-default md:m-auto">
      <div className="items-center md:space-x-12 md:flex">
        <AppLogo/>
        <p className="mt-6 text-sm font-normal md:mt-0 md:w-1/5 text-slate-body">
          A product from <a href="components/PageFooter" target="_blank"><span className="underline">tsukie</span></a>
        </p>
      </div>
      <hr className="my-6"/>
      <div className="flex justify-between">
        <p>Ⓒ tsukie All rights reserved</p>
        <div className="flex space-x-10">
          <a href="https://twitter.com/WallCalApp" target="_blank" rel="noreferrer">
            <img src="/my-assets/twitter.svg" alt="twitter for wallcal blotter alternative"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default PageFooter;
