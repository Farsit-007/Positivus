const Titles = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 lg:justify-start">
      <div className="bg-[#B9FF66] rounded-lg p-2 dark:text-black text-4xl">{title}</div>
      <div>
        <p className="text-base md:text-lg leading-relaxed max-w-xl text-center lg:text-start">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Titles;
