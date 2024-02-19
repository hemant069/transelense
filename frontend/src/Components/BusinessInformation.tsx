export const BusinessInformation = () => {
  return (
    <div className="mt-10 font-[inter] ">
      <h1 className="text-2xl font-semibold text-[#932832] ">
        Business Information
      </h1>
      <form className="mt-10" action="">
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold text-[#932832]">
                Business Name
              </label>
              <input
                className="border h-10 rounded-lg bg-[whitesmoke]"
                type="text"
                name="businessName"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-[14px] font-semibold text-[#932832]"
                htmlFor=""
              >
                Country
              </label>
              <select
                className="border h-10 rounded-lg bg-[whitesmoke]"
                name="country"
                id=""
              >
                <option value="">new</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className="text-[14px] font-semibold text-[#932832]"
                htmlFor=""
              >
                State
              </label>
              <select
                className="border h-10 rounded-lg bg-[whitesmoke]"
                name="state"
                id=""
              >
                <option value="">new</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className="text-[14px] font-semibold text-[#932832]"
                htmlFor=""
              >
                City
              </label>
              <select
                className="border h-10 rounded-lg bg-[whitesmoke]"
                name="city"
                id=""
              >
                <option value="">new</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-semibold text-[#932832] mt-3"
              htmlFor=""
            >
              Address
            </label>
            <input
              className="w-[700px] border pt-3 pb-3  mt-2 mb-5 rounded-lg bg-[whitesmoke]"
              type="text"
              placeholder="address"
              name="address"
              id=""
            />
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <input type="time" name="open" id="" />
            <input type="time" name="close" placeholder="close" id="" />
            <input type="email" placeholder="email" name="email" id="" />
            <input type="number" placeholder="mobile" name="mobile" id="" />
            <input type="file" name="file" id="" />
          </div>
        </div>
      </form>
    </div>
  );
};
