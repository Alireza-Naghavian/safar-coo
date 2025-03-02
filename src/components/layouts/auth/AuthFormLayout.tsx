import { AuthFormLayout_T } from "@/types/auth.t";
export const inputStyles = {
  style: `border-2 tr-300 outline-none focus-within:shadow-accent-200
        focus-within:border-accent-400 bg-white md:text-bodyB1semi 
        text-natural-black  rounded-12 tracking-tight`,
};
function AuthFormLayout({
  linkContent,
  title,
  children,
  qTitle,
  formType,
  setFormType,
}: AuthFormLayout_T) {
  return (
    <div className="relative w-full h-fit flex  flex-col gap-y-10 sm:gap-y-0 tr-300">
      <h5
        className="md:mt-8 mt-4 mx-auto text-center md:text-h2Semi tracking-tighter
                        text-bodyB1semi text-natural-gray1"
      >
        {title}
      </h5>
      {children}
      {formType !== null&&setFormType && (
        <div
          className="sm:mt-6 box-center md:child:text-captionMd child:text-captionMd
        flex-col gap-y-1 child:text-center child:text-natural-black"
        >
          <span>{qTitle}</span>
          <button
            onClick={() => setFormType(formType)}
            className="!text-primary-500 font-bold"
          >
            {linkContent}
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthFormLayout;
