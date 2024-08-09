const Grid = () => {
  return (
    <div className="grid grid-cols-12 auto-row-[400px] my-20 mx-20 relative opacity-100 rounded-md">
      <div className="h-[100px] col-span-2 bg-emerald-500/0 border-b-8 border-r-8  rounded-br-3xl border-emerald-500 self-baseline mt-[6.25rem] translate-x-2 translate-y-2" />
      <div className="h-[200px] col-span-10 bg-emerald-500 rounded-t-lg" />
      <div className="h-[450px] col-span-4 bg-emerald-500 rounded-tl-lg" />
      <div className="h-[450px] col-span-5 bg-emerald-500   " />
      <div className="h-[450px] col-span-3 bg-emerald-500  rounded-br-lg " />
      <div className="h-[200px] col-span-10 bg-emerald-500  rounded-b-lg " />
      <div className="h-[200px] col-span-2 bg-emerald-500/0 border-t-8 border-l-8 rounded-tl-3xl mb-[6.25rem] -translate-x-2 -translate-y-2 border-emerald-500" />
    </div>
  );
};

export default Grid;
