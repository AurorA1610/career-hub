const CategoryList = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl	font-extrabold">
          Job Category List
        </h2>
        <p className="font-medium text-base text-neutral-500 my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 p-6 mt-12 mb-24">
        <div className="text-center">
          <div className="flex justify-center">
            <img src="accounts.png" alt="" />
          </div>
          <h4 className="text-zinc-700 font-extrabold text-xl mt-9 mb-2">
            Account & Finance
          </h4>
          <p className="font-medium text-base text-neutral-400">
            300 Jobs Available
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <img src="creative.png" alt="" />
          </div>
          <h4 className="text-zinc-700 font-extrabold text-xl mt-9 mb-2">
            Creative Design
          </h4>
          <p className="font-medium text-base text-neutral-400">
            100+ Jobs Available
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <img src="marketing.png" alt="" />
          </div>
          <h4 className="text-zinc-700 font-extrabold text-xl mt-9 mb-2">
            Marketing & Sales
          </h4>
          <p className="font-medium text-base text-neutral-400">
            150 Jobs Available
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <img src="chip.png" alt="" />
          </div>
          <h4 className="text-zinc-700 font-extrabold text-xl mt-9 mb-2">
            Engineering Job
          </h4>
          <p className="font-medium text-base text-neutral-400">
            224 Jobs Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
