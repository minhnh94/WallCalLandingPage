const FeatureBlock = ({ icon, heading, description }) => (
  <div className="ml-6 mr-6 md:ml-[0px] md:w-1/3 mt-[30px] md:mr-[30px] p-9 rounded-3xl bg-white">
    <div className="text-center">
      <div className="w-12 h-12 p-3 m-auto rounded-full bg-slate-blue">
        { icon }
      </div>
      <h5 className="mt-4 text-xl font-bold"> { heading }</h5>
      <p className="mt-4 font-normal text-desktop-paragraph"> { description }</p>
    </div>
  </div>
);

const OtherFeatureList = ({ featureList }) => {
  return (
    <section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
      <div className="m-auto max-w-default">
        <h2 className="mx-6 font-medium text-center text-mobile-h2 md:text-desktop-h2 md:mx-0">
          Other features to tailor WallCal to your taste
        </h2>
        <div className="mt-6">
          { featureList.map(featureRow => (
            <div className="md:flex" key={ Math.random() }>
              { featureRow.map(({ icon, heading, description }) => (
                <FeatureBlock
                  key={ Math.random() }
                  icon={ icon }
                  heading={ heading }
                  description={ description }
                />
              )) }
            </div>
          )) }
        </div>
      </div>
    </section>
  );
};

export default OtherFeatureList;
