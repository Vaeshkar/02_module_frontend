const Header = () => {
  return (
    <header className="w-full p-4 mx-auto flex items-center justify-center">
      <div className="flex items-center justify-between h-[900px] gap-6">
        <div className="flex-1 w-full h-full btn bg-[#F9E900] hover:bg-black text-black hover:text-[#F9E900] font-bold rounded-3xl flex items-center justify-center text-[7.5rem] transition-all duration-300">
					<p className="flex -rotate-90 whitespace-nowrap">
						 New Entry
         	</p>
        </div>
        <div className="flex-1 bg-[#00C2D1] p-4 rounded-3xl tracking-[-0.6em] leading-[14rem] max-w-[900px] hyphens-auto">
          <h1 className="text-[18rem] font-bold bagel-fat-one-regular uppercase">Pers <br />onal<br />Diary</h1>
          <h3 className="text-[7.5rem] font-bold bagel-fat-one-regular -mt-8">One Entry a day</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;