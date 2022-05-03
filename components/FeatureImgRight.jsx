import FeatureItem from "./common/FeatureItem";

const FeatureImgRight = ({ title, featureList = [] }) => (
  <section className="bg-slate-light font-dm-sans">
    <div className="pt-[88px] pb-12 lg:pt-[130px] lg:pb-[90px] mx-6 lg:mx-auto max-w-default">
      <div className="flex flex-col lg:flex-row">
        <div>
          <div
            className="lg:w-[558px] lg:h-[558px] flex items-center justify-center lg:border-r-8 lg:border-r-slate-orange">
            <img
              // style={{height:'558px', width: '558px', objectFit: 'cover', objectPosition: '100% 0'}}
              className="lg:w-[558px] lg:h-[558px] lg:object-cover lg:object-left"
              src="/my-assets/wallcal-today-agenda.png"
              alt="wallcal desktop wallpaper background calendar blotter alternative screenshot"
            />
          </div>
        </div>
        <div className="w-full lg:order-first flex flex-col justify-center">
          <div className="flex w-full lg:justify-start">
            <div className="lg:w-[460px]">
              <h2
                className="font-medium leading-tight text-mobile-h2 lg:text-desktop-h2 text-slate-headline mt-[88px] lg:mt-0">
                { title }
              </h2>

              <div
                id={ 'item-container' }
                className="flex flex-col justify-between mt-12 gap-6"
              >
                { featureList.map(({ icon, text }) =>
                  <FeatureItem key={ Math.random() } icon={ icon } text={ text }/>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureImgRight;
