export default function PageContainer({ children }) {
  return (
    <div className="bg-slate-light font-dm-sans">
      <div className="py-12 md:py-[90px] mx-6 max-w-default md:m-auto">
        <div className="items-center md:space-x-12 md:flex">{children}</div>
      </div>
    </div>
  );
}
