import FAQItem from "./common/FAQItem";

const FAQ = ({ items }) => {
  return (
    <section className="py-20 font-dm-sans bg-slate-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-medium font-heading">Frequently asked questions</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <ul>
            { items.map(item => (
              // eslint-disable-next-line react/jsx-key
              <FAQItem question={ item.question } answer={ item.answer } key={ item.id }/>
            )) }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
