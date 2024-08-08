const Grid = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-4 auto-row-[300px] my-40 gap-4 mx-40 relative opacity-10">
      <div className="h-[200px] col-span-5 bg-blue-500 rounded-md" />
      <div className="h-[200px] col-span-7 bg-orange-500 rounded-md" />
      <div className="h-[200px] col-span-2 bg-red-500 rounded-md" />
      <div className="h-[200px] col-span-7  bg-emerald-500 rounded-md" />
      <div className="h-[200px] col-span-3 bg-amber-500 rounded-md" />
      <div className="h-[200px] col-span-9 bg-facebook rounded-md" />
      <div className="h-[200px] col-span-3 bg-instagram rounded-md" />
    </div>
  );
};

export default Grid;
