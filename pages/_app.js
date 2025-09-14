import "../styles/globals.css";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain="wallcal.app"
      scriptProps={{ defer: true }}
      trackOutboundLinks={true}
      taggedEvents={true}
      customDomain="https://plausible.tsukie.com"
      selfHosted={true}
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
