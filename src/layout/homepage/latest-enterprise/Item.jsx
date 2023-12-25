const Item = ({ companyName, companyLink }) => {
  return (
    <div className="flex bg-white rounded-2xl p-3 gap-3">
      <div className="w-full">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./images/top-hero.jpg"
        />
      </div>
      <div>
        <h3 className="uppercase font-semibold text-sm">{companyName}</h3>
        <a href={companyLink} className="uppercase text-sm tracking-wider">
          Go &gt;
        </a>
      </div>
    </div>
  );
};

export default Item;
