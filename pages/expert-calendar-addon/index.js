import PageContainer from "../../components/common/page-container";
import Image from "next/image";
import PageFooter from "../../components/PageFooter";

export default function ExpertCalendarAddon() {
  return (
    <main>
      <PageContainer>
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          <div className="space-y-10 react_markdown">
            <h2>WallCal Expert calendar add-on feature preview</h2>
            <br />
            <h3>
              🗓 Option to replace the month view with the weekly agenda view
            </h3>
            <br />
            <Image
              src="https://i.imgur.com/sxZBLru.gif"
              alt="WeeklyAgenda WallCal"
              layout="intrinsic"
              width={600}
              height={600}
              objectFit="contain"
            />
            <br />
            <h3>
              🗓 You can change the visible time range while in week view mode
            </h3>
            <br />
            <Image
              src="https://i.imgur.com/s39T4MX.gif"
              alt="VisiblePeriod WallCal"
              layout="intrinsic"
              width={600}
              height={600}
              objectFit="contain"
            />
            <br />
            <h3>
              🗓 And you can change the number of days displayed in week view
              mode (the leftmost day is today)
            </h3>
            <br />
            <Image
              src="https://i.imgur.com/opclUZV.gif"
              alt="DayNum WallCal"
              layout="intrinsic"
              width={600}
              height={600}
              objectFit="contain"
            />
            <br />
            <h3>
              📌 Choose which calendar/reminder sets to be displayed on the
              calendar
            </h3>
            <br />
            <Image
              src="https://i.imgur.com/C8KOvE7.gif"
              alt="ToggleCalendarSetToggleCalendarSet WallCal"
              layout="intrinsic"
              width={600}
              height={600}
              objectFit="contain"
            />
            <br />
            <h3>
              👁 Option to completely hide the to-do list view or the calendar
              view
            </h3>
            <br />
            <Image
              src="https://i.imgur.com/UfuBAR9.gif"
              alt="ToggleHiddenViewToggleHiddenView WallCal"
              layout="intrinsic"
              width={600}
              height={600}
              objectFit="contain"
            />
            <br />
            <h3>🎨 Change the calendar&apos;s background color freely</h3>
            <br />
            <Image
              src="https://i.imgur.com/wznPnyF.gif"
              alt="ChangeColor WallCal"
              layout="intrinsic"
              width={600}
              height={600}
              objectFit="contain"
            />
            <br />
            <h3>⏱️ Set the hour indicator between 12-hour or 24-hour format</h3>
            <br />
            <p>We hope the title was self-explanatory enough 😬</p>
          </div>
        </div>
      </PageContainer>
      <PageFooter />
    </main>
  );
}
