import { StrictPropsWithChildren } from '../CommonTypes';

function Template({ children }: StrictPropsWithChildren) {
  return (
    <div className="w-full max-w-md h-screen border-solid border-2 border-gray-400 rounded-unifyR mx-5">
      {children}
    </div>
  );
}

export default Template;
