function header() {
  return (
    <div className="box-border flex overflow-hidden overflow-x-hidden overflow-y-hidden relative flex-col shrink-0 mt-px mb-14 bg-white h-[165.5px]">
      <img
        loading="lazy"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets%2F72645f1c581446d9b326ff62153df84b%2F4cabc051b75443448a1a92bff409187c"
        className="box-border object-contain object-left overflow-hidden absolute top-px shrink-0 mr-0 aspect-square h-[77px] left-[33px] max-w-[148px] min-h-[20px] min-w-[20px] w-[67px]"
      />
      <div className="box-border flex relative flex-col shrink-0">
        <div className="flex flex-row">
          <div className="pb-3 pl-12 mt-3 mb-auto ml-14 text-4xl text-cyan-600 font-[bold]">
            WECARE
          </div>
          <div className="box-border flex absolute flex-col grow shrink-0 justify-center items-start self-center py-2 pr-16 pl-3.5 rounded-3xl bg-[white] h-[51px] left-[346px] max-w-[662px] shadow-[0_6px_10px_rgba(30,144,197,0.5)] top-[15px] w-[820px]">
            <input
              type="text"
              placeholder="Tìm kiếm và nhấn enter"
              className="absolute top-2 left-3 grow px-4 py-2.5 ml-2.5 rounded-3xl rounded-tl-3xl border-[none] w-[333px]"
            />
          </div>
          <button className="absolute py-2.5 pr-5 pl-9 bg-sky-500 rounded-none border-white cursor-pointer border-[none] h-[51px] left-[903px] text-[white] top-[17px] w-[116px]">
            Search
          </button>
        </div>
      </div>
      <div className="flex gap-0 self-stretch my-auto max-md:justify-center">
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Trang Chủ</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Sản phẩm</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Về chúng tôi</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Tin tức</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Đơn hàng·</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Kho vận</h4>
        </div>
      </div>
    </div>
  );
}

export default header;
