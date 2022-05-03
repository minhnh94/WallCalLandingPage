import PageHero from "../components/PageHero";
import FeatureImgLeft from "../components/FeatureImgLeft";
import FeatureImgRight from "../components/FeatureImgRight";
import { CheckCircleIcon } from "@heroicons/react/outline";
import OtherFeatureList from "../components/OtherFeatureList";
import PageCTA from "../components/PageCTA";
import PageFooter from "../components/PageFooter";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="WallCal - Beautiful transparent calendar on desktop wallpaper for macOS"
        description="Agendas/events/reminders on desktop wallpaper. Real-time update. Customizable."
        canonical="https://wallcal.app/"
        twitter={ { site: '@WallCalApp', handle: '@minhnh94' } }
        openGraph={ {
          url: 'https://wallcal.app/',
          type: 'website',
          title: 'WallCal - Beautiful transparent calendar on desktop wallpaper for macOS',
          description: 'Agendas/events/reminders on desktop wallpaper. Real-time update. Customizable.',
          images: [{
            url: 'https://wallcal.app/my-assets/twitter-card.png',
            width: 1600,
            height: 800,
            alt: 'WallCal desktop wallpaper calendar blotter alternative'
          }]
        } }
      />

      <main>
        <PageHero/>
        <FeatureImgLeft title="Your monthly calendar"
                        featuredImage="wallcal-monthly-view.png"
                        featureList={ [{
                          icon: <CheckCircleIcon className="text-white"/>,
                          text: "Display all events in the current month"
                        }] }/>
        <FeatureImgRight title="Your today agenda"
                         featureList={ [{
                           icon: <CheckCircleIcon className="text-white"/>,
                           text: "All your today events in a timeline"
                         }, {
                           icon: <CheckCircleIcon className="text-white"/>,
                           text: "Customizable visible time range"
                         }, {
                           icon: <CheckCircleIcon className="text-white"/>,
                           text: "Can display up to 7 days ahead"
                         }] }/>
        <FeatureImgLeft title="Your to-do list"
                        featuredImage="wallcal-todolist.png"
                        featureList={ [
                          {
                            icon: <CheckCircleIcon className="text-white"/>,
                            text: "Mini calendar with indicators for days with to-dos"
                          },
                          {
                            icon: <CheckCircleIcon className="text-white"/>,
                            text: "All to-dos in the current month, also displayed as a list"
                          }
                        ] }/>
        <OtherFeatureList
          featureList={ [
            [
              {
                icon: <CheckCircleIcon className="text-white"/>,
                heading: "Resize & positioning",
                description: "Put WallCal anywhere you want on your desktop, or on your second monitor"
              },
              {
                icon: <CheckCircleIcon className="text-white"/>,
                heading: "Frontmost state",
                description: "Instantly bring WallCal to frontmost with a mouseclick, or a hotkey"
              },
              {
                icon: <CheckCircleIcon className="text-white"/>,
                heading: "Hide selected calendar sets",
                description: "Select which calendar sets you want them to show"
              },
            ], [
              {
                icon: <CheckCircleIcon className="text-white"/>,
                heading: "Hide selected reminder sets",
                description: "Select which reminder sets you want them to show"
              },
              {
                icon: <CheckCircleIcon className="text-white"/>,
                heading: "Hide unwanted view",
                description: "Option to display only the calendar view, or the to-do list view"
              },
              {
                icon: <CheckCircleIcon className="text-white"/>,
                heading: "Choose number of days to show",
                description: "(Week view only) Option to display only today's agenda, or up to the next 7 days'"
              },
            ], [
              {
                icon: <CheckCircleIcon className="text-white"/>,
                heading: "Define visible time range",
                description: "(Week view only) Option to select the agenda's display time range (Default is 0:00 ~ 24:00)"
              },
              {
                icon: <CheckCircleIcon className="text-white"/>,
                heading: "Customize color",
                description: "Freely tweak the calendar's background color. Or make it 100% transparent. Your choice"
              },
              {
                icon: <CheckCircleIcon className="text-white"/>,
                heading: "Multi-language support",
                description: "WallCal supports 中文（🇨🇳）, 日本語（🇯🇵）, Deutsch（🇩🇪） besides English. More to come"
              },
            ],
          ] }/>
        <PageCTA/>
        <PageFooter/>
      </main>
    </div>
  )
}
