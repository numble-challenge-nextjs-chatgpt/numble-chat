import { InputPropsType } from '../CommonTypes';

function Input({ title }: InputPropsType) {
  return (
    <>
      <p className="flex items-center font-bold text-2xl leading-7 text-white self-start h-14 w-full">{title}</p>
      <input className="w-full max-w-BtnL h-BtnL rounded-unifyR border-2 border-input-black bg-transparent text-white p-4 text-right" />
    </>
  );
}

export default Input;
