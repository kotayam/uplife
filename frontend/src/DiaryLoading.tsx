export default function DiaryLoading() {
  return (
    <div className="animate-pulse border-2 border-orange-200 mb-1">
      <div className="bg-orange-200 p-1 h-7"></div>
      <div className="p-2">
        <div className="bg-slate-300 h-4 w-[75px] mb-2"></div>
        <div className="bg-slate-300 h-3 w-[100px] mb-2"></div>
        <div className="bg-slate-300 h-9 mb-2"></div>
        <div className="flex justify-end">
          <div className="bg-slate-300 h-2 w-[125px]"></div>
        </div>
      </div>
    </div>
  );
}
