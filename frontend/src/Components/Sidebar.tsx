export const Sidebar = () => {
  const sidebarName: { id: number; name: string }[] = [
    {
      id: 1,
      name: "Business Information",
    },
    {
      id: 2,
      name: "Owner & Manager Details",
    },
    {
      id: 3,
      name: "PAN/Aadhaar Details",
    },
    {
      id: 4,
      name: "Legal Documents",
    },
    {
      id: 5,
      name: "Bank Details",
    },
    {
      id: 6,
      name: "Service Info",
    },
    {
      id: 7,
      name: "Preview Document",
    },
    {
      id: 8,
      name: "Reach Increased",
    },
  ];
  return (
    <div className="p-5 font-[inter]">
      <div className="border border-solid w-[360px] bg-[#ffd098] p-8 mt-5 rounded-2xl ">
        <h4 className="text-3xl font-bold  ">Partner with us</h4>
        <p className="font-[inter] leading-[25px] text-[16px]">
          Be our partern in just few steps and start increasing your reach by
          gaining new customers
        </p>
        <div className=" flex flex-col gap-10 mt-2 ">
          {sidebarName.map((el: { id: number; name: string }) => {
            return (
              <div className="flex gap-4 items-center font-['inter']font-normal ">
                <p className=" w-10 h-10 text-center  border border-solid rounded-full items-center bg-[#dc3545] text-white flex justify-center ">
                  {el.id}
                </p>
                <p className="text-[#121212A3]">{el.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
