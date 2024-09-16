import PageContainer from "../../components/common/page-container";
import Image from "next/image";
import PageFooter from "../../components/PageFooter";

export default function ContactUs() {
  return (
    <main>
      <PageContainer>
        <div className="space-y-10 react_markdown">
          <Image
            src="/my-assets/app-icon.png"
            alt="WallCal app logo"
            width={100}
            height={100}
          />
          <p>
            If you purchased our macOS app{" "}
            <a
              href="https://wallcal.app/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              WallCal/WallCal Lite
            </a>{" "}
            and you encountered any troubles, or need support regarding a
            specific function, please don&apos;t hesitate to email us at{" "}
            <a className="underline" href="mailto:support@wallcal.app">
              support@wallcal.app
            </a>
            . We are more than happy to assist you!
          </p>
        </div>
      </PageContainer>
      <PageFooter />
    </main>
  );
}
