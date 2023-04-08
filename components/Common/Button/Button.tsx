import { ButtonPropsType, StrictPropsWithChildren } from '../CommonTypes';

function Button({ size, color, children }: StrictPropsWithChildren<ButtonPropsType>) {
  return (
    <button
      className={`${size === 'L' ? 'max-w-BtnL h-BtnL text-[1.5rem]' : 'max-w-BtnS h-BtnS text-2xl'} ${
        color === 'B' ? 'bg-mainB' : 'bg-mainR'
      } w-full rounded-unifyR font-bold`}
    >
      {children}
    </button>
  );
}

export default Button;
