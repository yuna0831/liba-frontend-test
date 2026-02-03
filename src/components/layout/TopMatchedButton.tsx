export function TopMatchedButton() {
    return (
        <div className="absolute left-[950px] top-[101px] w-[162px] h-[37px] bg-white rounded-[31px] flex justify-center items-center gap-[10px] px-[18px] py-[8px] z-10 cursor-pointer transition-all duration-200 border-0 outline-none ring-0 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:border-[1.5px] hover:border-solid hover:border-[#B7FD33]">

            {/* Icon 16x16 */}
            <div className="w-[16px] h-[16px] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.57 0.57H15.43V14.29H0.57V0.57Z" stroke="#1F2937" strokeWidth="1" />
                    <path d="M0.57 4H15.43" stroke="#1F2937" strokeWidth="1" />
                    <path d="M13.72 10.86C13.72 12.44 12.44 13.72 10.86 13.72C9.28 13.72 8 12.44 8 10.86C8 9.28 9.28 8 10.86 8C12.44 8 13.72 9.28 13.72 10.86Z" stroke="#1F2937" strokeWidth="1" />
                    <path d="M12.88 12.88L15.43 15.43" stroke="#1F2937" strokeWidth="1" />
                </svg>
            </div>

            {/* Text - 16px, 500, -0.02em */}
            <span className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[20px] tracking-[-0.02em] text-[#1F2937]">
                Top matched
            </span>
        </div>
    );
}